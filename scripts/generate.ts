import fs from 'fs/promises'
import type { OpenAPI, OpenAPIV2, OpenAPIV3 } from 'openapi-types'
import { convertType, makeInterface, makeMethod } from './src/codegen'
import { parseSwagger, camelCase, sentenceCase, resolveRef } from './src/utils'

const groups = [{
    key: 'forum',
    url: 'scripts/forum.json'
}, {
    key: 'market',
    url: 'https://docs.api.zelenka.guru/swagger/market.json\n'
}] as const

for (const group of groups) {
    const skey = sentenceCase(group.key)
    const { paths, components } = await parseSwagger(group.url) as OpenAPIV3.Document

    let request_types = '// auto-generated, don\'t edit manually\n\n',
        response_types = request_types

    let code =
`import { ApiGroup } from './base'

class ${skey}Api extends ApiGroup {\n`

    for (const pathname in paths) {
        if (pathname.startsWith('/oauth')) continue

        const methods = paths[pathname]
        for (const http_method in methods) {
            // @ts-ignore
            const method = methods[http_method] as OpenAPI.Operation
            if (!method.summary) continue

            // TODO: requestBody

            const parameters = method.parameters as OpenAPIV2.ParameterObject[] || []
            const methodName = method.summary.replace(/\W/g, '')

            // Унижение невинных девственниц, сосание мела и дрочка ежам,
            // насилие над курочками, засовывание различных предметов девочкам в их дырку

            let optionalParams = true

            request_types += makeInterface({
                name: methodName + 'Request',
                params: parameters.map(item => {
                    item = resolveRef(item, components!)
                    if (item.required)
                        optionalParams = false

                    return [
                        item.name,
                        convertType(item.schema as OpenAPIV2.SchemaObject),
                        item.description || '',
                        !item.required
                    ]
                })
            })

            code += makeMethod({
                optionalParams,
                pathname, http_method,
                tsdoc: method.description,
                paramsType: methodName + 'Request',
                returnType: methodName + 'Response',
                name: camelCase(method.summary.replace(/ \(.+\)/, ''))
            })

            // я в рот трахал типы этой либы
            let хуятина_блять = (method.responses!['200'] as any)['content']
            хуятина_блять = хуятина_блять['application/json'] || хуятина_блять['text/html']
            const schema = resolveRef(хуятина_блять.schema, components!) as OpenAPIV2.SchemaObject

            response_types += makeInterface({
                name: methodName + 'Response',
                params: schema.properties ? Object.entries(schema.properties).map(([name, item]) => {
                    return [
                        name,
                        convertType(item as OpenAPIV2.SchemaObject),
                        item.description || '',
                        !item.required
                    ]
                }) : []
            })
        }
    }

    code = code.slice(0, -2) + `\n}\n\nexport default ${skey}Api`
    request_types = request_types.slice(0, -2)
    response_types = response_types.slice(0, -2)

    await Promise.all([
        fs.unlink(`src/groups/${group.key}.ts`).catch(() => 0),
        fs.unlink(`src/types/${group.key}_requests.d.ts`).catch(() => 0),
        fs.unlink(`src/types/${group.key}_responses.d.ts`).catch(() => 0)
    ])

    await Promise.all([
        fs.writeFile(`src/groups/${group.key}.ts`, code),
        fs.writeFile(`src/types/${group.key}_requests.d.ts`, request_types),
        fs.writeFile(`src/types/${group.key}_responses.d.ts`, response_types)
    ])
}

console.log('Done.')