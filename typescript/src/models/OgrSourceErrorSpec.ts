/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine API
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
export const OgrSourceErrorSpec = {
    Ignore: 'ignore',
    Abort: 'abort'
} as const;
export type OgrSourceErrorSpec = typeof OgrSourceErrorSpec[keyof typeof OgrSourceErrorSpec];


export function instanceOfOgrSourceErrorSpec(value: any): boolean {
    for (const key in OgrSourceErrorSpec) {
        if (Object.prototype.hasOwnProperty.call(OgrSourceErrorSpec, key)) {
            if (OgrSourceErrorSpec[key as keyof typeof OgrSourceErrorSpec] === value) {
                return true;
            }
        }
    }
    return false;
}

export function OgrSourceErrorSpecFromJSON(json: any): OgrSourceErrorSpec {
    return OgrSourceErrorSpecFromJSONTyped(json, false);
}

export function OgrSourceErrorSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceErrorSpec {
    return json as OgrSourceErrorSpec;
}

export function OgrSourceErrorSpecToJSON(value?: OgrSourceErrorSpec | null): any {
    return value as any;
}

export function OgrSourceErrorSpecToJSONTyped(value: any, ignoreDiscriminator: boolean): OgrSourceErrorSpec {
    return value as OgrSourceErrorSpec;
}

