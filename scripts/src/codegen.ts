/*
    Ребята, не стоит вскрывать эту тему. Вы молодые, шутливые, вам все легко.
    Это не то. Это не фроала и даже не чосены. Сюда лучше не лезть. Серьезно,
    любой из вас будет жалеть. Лучше закройте файл и забудьте, что тут писалось.
    Я вполне понимаю, что данным комментарием вызову дополнительный интерес,
    но хочу сразу предостеречь пытливых - стоп. Остальные просто не найдут.
 */

import type { OpenAPIV2 } from 'openapi-types'

function makeMethod (opts: {
    name: string
    returnType: string
    paramsType: string
    optionalParams: boolean
    http_method: string
    pathname: string
    tsdoc?: string
}) {
    if (opts.tsdoc) {
        opts.tsdoc = opts.tsdoc.split(/\n+/).map(i => `    // ${i}`).join('\n') + '\n'
    }

    return `${opts.tsdoc || ''}    async ${opts.name} (params: ${opts.paramsType}${opts.optionalParams ? ' = {}' : ''}): Promise<${opts.returnType}> {
        return await this.api.call(
            '${opts.http_method.toUpperCase()}',
            this.endpoint + \`${opts.pathname.replace(/\{/g, '${params.')}\`,
            params
        )
    }\n\n`
}

function makeInterface (opts: {
    name: string
    params: [string, string, string, boolean][]
}) {
    let params = ''
    for (let [name, type, doc, undef] of opts.params) {
        if (name == 'system_info') continue

        if (doc) params += `    // ${doc.replace(/\n/g, '').replace(/\r/, '\\n')}\n`
        if (name.match(/\W/)) name = `'${name}'`
        params += `    ${name}${undef ? '?' : ''}: ${type}\n`
    }

    return `interface ${opts.name} {\n${params}}\n\n`
}

function convertType (
    schema: OpenAPIV2.SchemaObject
) {
    if (schema.enum) {
        if (schema.enum[0] == 'true')
            return 'true'

        if (schema.type == 'string')
            schema.enum = schema.enum.map((i: string) => `'${i}'`)

        return schema.enum.join(' | ')
    }

    if (schema.type == 'array') {
        // @ts-ignore
        return `Array<${schema.items.type}>`
    }

    if (schema.type == 'object') {
        if (!schema.properties) {
            return 'unknown'
        }

        const req = schema.required! || []
        const props: Record<string, any> = []

        for (const key in schema.properties) {
            const newkey = (key + (!req.includes(key) ? '?' : '')).replace(/\{/, '[').replace(/}\??/, ': string]')
            props.push(`${newkey}: ${convertType(schema.properties[key])}`)
        }

        const add = schema.additionalProperties
        if (add) { // @ts-ignore
            props.push(`[key: string]: ${add.type}`)
        }

        return `{ ${props.join(', ')} }`
    }

    if (schema.type == 'integer')
        return 'number'

    return 'string'
}

export { makeMethod, makeInterface, convertType }