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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ColorParamStatic
 */
export interface ColorParamStatic {
    /**
     * 
     * @type {Array<number>}
     * @memberof ColorParamStatic
     */
    color: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ColorParamStatic
     */
    type: ColorParamStaticTypeEnum;
}


/**
 * @export
 */
export const ColorParamStaticTypeEnum = {
    Static: 'static'
} as const;
export type ColorParamStaticTypeEnum = typeof ColorParamStaticTypeEnum[keyof typeof ColorParamStaticTypeEnum];


/**
 * Check if a given object implements the ColorParamStatic interface.
 */
export function instanceOfColorParamStatic(value: object): value is ColorParamStatic {
    if (!('color' in value) || value['color'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function ColorParamStaticFromJSON(json: any): ColorParamStatic {
    return ColorParamStaticFromJSONTyped(json, false);
}

export function ColorParamStaticFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorParamStatic {
    if (json == null) {
        return json;
    }
    return {
        
        'color': json['color'],
        'type': json['type'],
    };
}

export function ColorParamStaticToJSON(value?: ColorParamStatic | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'color': value['color'],
        'type': value['type'],
    };
}

