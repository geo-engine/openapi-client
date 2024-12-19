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
import { LinearGradientFromJSONTyped, LinearGradientToJSON, } from './LinearGradient';
import { LogarithmicGradientFromJSONTyped, LogarithmicGradientToJSON, } from './LogarithmicGradient';
import { PaletteColorizerFromJSONTyped, PaletteColorizerToJSON, } from './PaletteColorizer';
export function ColorizerFromJSON(json) {
    return ColorizerFromJSONTyped(json, false);
}
export function ColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'linearGradient':
            return Object.assign(Object.assign({}, LinearGradientFromJSONTyped(json, true)), { type: 'linearGradient' });
        case 'logarithmicGradient':
            return Object.assign(Object.assign({}, LogarithmicGradientFromJSONTyped(json, true)), { type: 'logarithmicGradient' });
        case 'palette':
            return Object.assign(Object.assign({}, PaletteColorizerFromJSONTyped(json, true)), { type: 'palette' });
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${json['type']}'`);
    }
}
export function ColorizerToJSON(value) {
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
