import SwaggerParser from '@apidevtools/swagger-parser'
import type { OpenAPIV2 } from 'openapi-types'

async function parseSwagger (url: string) {
    const data = await SwaggerParser.parse(url)
    if (!data.paths) {
        console.error('cant parse docs')
        process.exit(1)
    }

    return data
}

function camelCase (str: string) {
    return str.toLowerCase().split(' ').reduce((s, c) => s
        + (c.charAt(0).toUpperCase() + c.slice(1)))
}

function sentenceCase (str: string) {
    str = str.toLowerCase()
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function resolveRef (
    schema: OpenAPIV2.ParameterObject,
    components: Record<string, any>
): OpenAPIV2.ParameterObject {
    if ('$ref' in schema) {
        const ref = String(schema.$ref).split('/').slice(-2)
        return components[ref[0]][ref[1]]
    }

    return schema
}

export { parseSwagger, camelCase, sentenceCase, resolveRef }