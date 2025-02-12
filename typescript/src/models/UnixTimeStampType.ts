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
export const UnixTimeStampType = {
    EpochSeconds: 'epochSeconds',
    EpochMilliseconds: 'epochMilliseconds'
} as const;
export type UnixTimeStampType = typeof UnixTimeStampType[keyof typeof UnixTimeStampType];


export function instanceOfUnixTimeStampType(value: any): boolean {
    for (const key in UnixTimeStampType) {
        if (Object.prototype.hasOwnProperty.call(UnixTimeStampType, key)) {
            if (UnixTimeStampType[key as keyof typeof UnixTimeStampType] === value) {
                return true;
            }
        }
    }
    return false;
}

export function UnixTimeStampTypeFromJSON(json: any): UnixTimeStampType {
    return UnixTimeStampTypeFromJSONTyped(json, false);
}

export function UnixTimeStampTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnixTimeStampType {
    return json as UnixTimeStampType;
}

export function UnixTimeStampTypeToJSON(value?: UnixTimeStampType | null): any {
    return value as any;
}

export function UnixTimeStampTypeToJSONTyped(value: any, ignoreDiscriminator: boolean): UnixTimeStampType {
    return value as UnixTimeStampType;
}

