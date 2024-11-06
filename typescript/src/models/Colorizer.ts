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

import {
    LinearGradient,
    instanceOfLinearGradient,
    LinearGradientFromJSON,
    LinearGradientFromJSONTyped,
    LinearGradientToJSON,
} from './LinearGradient';
import {
    LogarithmicGradient,
    instanceOfLogarithmicGradient,
    LogarithmicGradientFromJSON,
    LogarithmicGradientFromJSONTyped,
    LogarithmicGradientToJSON,
} from './LogarithmicGradient';
import {
    PaletteColorizer,
    instanceOfPaletteColorizer,
    PaletteColorizerFromJSON,
    PaletteColorizerFromJSONTyped,
    PaletteColorizerToJSON,
} from './PaletteColorizer';

/**
 * @type Colorizer
 * 
 * @export
 */
export type Colorizer = { type: 'linearGradient' } & LinearGradient | { type: 'logarithmicGradient' } & LogarithmicGradient | { type: 'palette' } & PaletteColorizer;

export function ColorizerFromJSON(json: any): Colorizer {
    return ColorizerFromJSONTyped(json, false);
}

export function ColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Colorizer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'linearGradient':
            return {...LinearGradientFromJSONTyped(json, true), type: 'linearGradient'};
        case 'logarithmicGradient':
            return {...LogarithmicGradientFromJSONTyped(json, true), type: 'logarithmicGradient'};
        case 'palette':
            return {...PaletteColorizerFromJSONTyped(json, true), type: 'palette'};
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${json['type']}'`);
    }
}

export function ColorizerToJSON(value?: Colorizer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'linearGradient':
            return LinearGradientToJSON(value);
        case 'logarithmicGradient':
            return LogarithmicGradientToJSON(value);
        case 'palette':
            return PaletteColorizerToJSON(value);
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${value['type']}'`);
    }

}

