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
export const FileNotFoundHandling = {
    NoData: 'NoData',
    Error: 'Error'
} as const;
export type FileNotFoundHandling = typeof FileNotFoundHandling[keyof typeof FileNotFoundHandling];


export function instanceOfFileNotFoundHandling(value: any): boolean {
    for (const key in FileNotFoundHandling) {
        if (Object.prototype.hasOwnProperty.call(FileNotFoundHandling, key)) {
            if (FileNotFoundHandling[key as keyof typeof FileNotFoundHandling] === value) {
                return true;
            }
        }
    }
    return false;
}

export function FileNotFoundHandlingFromJSON(json: any): FileNotFoundHandling {
    return FileNotFoundHandlingFromJSONTyped(json, false);
}

export function FileNotFoundHandlingFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileNotFoundHandling {
    return json as FileNotFoundHandling;
}

export function FileNotFoundHandlingToJSON(value?: FileNotFoundHandling | null): any {
    return value as any;
}

export function FileNotFoundHandlingToJSONTyped(value: any, ignoreDiscriminator: boolean): FileNotFoundHandling {
    return value as FileNotFoundHandling;
}

