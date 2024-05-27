/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.8.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * 
 * @export
 */
export const GetCapabilitiesFormat = {
    TextXml: 'text/xml'
} as const;
export type GetCapabilitiesFormat = typeof GetCapabilitiesFormat[keyof typeof GetCapabilitiesFormat];


export function instanceOfGetCapabilitiesFormat(value: any): boolean {
    for (const key in GetCapabilitiesFormat) {
        if (Object.prototype.hasOwnProperty.call(GetCapabilitiesFormat, key)) {
            if (GetCapabilitiesFormat[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function GetCapabilitiesFormatFromJSON(json: any): GetCapabilitiesFormat {
    return GetCapabilitiesFormatFromJSONTyped(json, false);
}

export function GetCapabilitiesFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetCapabilitiesFormat {
    return json as GetCapabilitiesFormat;
}

export function GetCapabilitiesFormatToJSON(value?: GetCapabilitiesFormat | null): any {
    return value as any;
}

