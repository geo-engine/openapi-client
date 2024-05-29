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
import type { Colorizer } from './Colorizer';
import {
    ColorizerFromJSON,
    ColorizerFromJSONTyped,
    ColorizerToJSON,
} from './Colorizer';

/**
 * 
 * @export
 * @interface ColorParamDerived
 */
export interface ColorParamDerived {
    /**
     * 
     * @type {string}
     * @memberof ColorParamDerived
     */
    attribute: string;
    /**
     * 
     * @type {Colorizer}
     * @memberof ColorParamDerived
     */
    colorizer: Colorizer;
    /**
     * 
     * @type {string}
     * @memberof ColorParamDerived
     */
    type: ColorParamDerivedTypeEnum;
}


/**
 * @export
 */
export const ColorParamDerivedTypeEnum = {
    Derived: 'derived'
} as const;
export type ColorParamDerivedTypeEnum = typeof ColorParamDerivedTypeEnum[keyof typeof ColorParamDerivedTypeEnum];


/**
 * Check if a given object implements the ColorParamDerived interface.
 */
export function instanceOfColorParamDerived(value: object): boolean {
    if (!('attribute' in value)) return false;
    if (!('colorizer' in value)) return false;
    if (!('type' in value)) return false;
    return true;
}

export function ColorParamDerivedFromJSON(json: any): ColorParamDerived {
    return ColorParamDerivedFromJSONTyped(json, false);
}

export function ColorParamDerivedFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorParamDerived {
    if (json == null) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'colorizer': ColorizerFromJSON(json['colorizer']),
        'type': json['type'],
    };
}

export function ColorParamDerivedToJSON(value?: ColorParamDerived | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attribute': value['attribute'],
        'colorizer': ColorizerToJSON(value['colorizer']),
        'type': value['type'],
    };
}

