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

import type { ColorParamDerived } from './ColorParamDerived';
import {
    instanceOfColorParamDerived,
    ColorParamDerivedFromJSON,
    ColorParamDerivedFromJSONTyped,
    ColorParamDerivedToJSON,
} from './ColorParamDerived';
import type { ColorParamStatic } from './ColorParamStatic';
import {
    instanceOfColorParamStatic,
    ColorParamStaticFromJSON,
    ColorParamStaticFromJSONTyped,
    ColorParamStaticToJSON,
} from './ColorParamStatic';

/**
 * @type ColorParam
 * 
 * @export
 */
export type ColorParam = { type: 'derived' } & ColorParamDerived | { type: 'static' } & ColorParamStatic;

export function ColorParamFromJSON(json: any): ColorParam {
    return ColorParamFromJSONTyped(json, false);
}

export function ColorParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): ColorParam {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'derived':
            return {...ColorParamDerivedFromJSONTyped(json, true), type: 'derived'};
        case 'static':
            return {...ColorParamStaticFromJSONTyped(json, true), type: 'static'};
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${json['type']}'`);
    }
}

export function ColorParamToJSON(value?: ColorParam | null): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'derived':
            return ColorParamDerivedToJSON(value);
        case 'static':
            return ColorParamStaticToJSON(value);
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${value['type']}'`);
    }

}

