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
import { ColorizerLinearGradientFromJSONTyped, ColorizerLinearGradientToJSON, } from './ColorizerLinearGradient';
import { ColorizerLogarithmicGradientFromJSONTyped, ColorizerLogarithmicGradientToJSON, } from './ColorizerLogarithmicGradient';
import { ColorizerPaletteFromJSONTyped, ColorizerPaletteToJSON, } from './ColorizerPalette';
import { ColorizerRgbaFromJSONTyped, ColorizerRgbaToJSON, } from './ColorizerRgba';
export function ColorizerFromJSON(json) {
    return ColorizerFromJSONTyped(json, false);
}
export function ColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'linearGradient':
            return Object.assign(Object.assign({}, ColorizerLinearGradientFromJSONTyped(json, true)), { type: 'linearGradient' });
        case 'logarithmicGradient':
            return Object.assign(Object.assign({}, ColorizerLogarithmicGradientFromJSONTyped(json, true)), { type: 'logarithmicGradient' });
        case 'palette':
            return Object.assign(Object.assign({}, ColorizerPaletteFromJSONTyped(json, true)), { type: 'palette' });
        case 'rgba':
            return Object.assign(Object.assign({}, ColorizerRgbaFromJSONTyped(json, true)), { type: 'rgba' });
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${json['type']}'`);
    }
}
export function ColorizerToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'linearGradient':
            return ColorizerLinearGradientToJSON(value);
        case 'logarithmicGradient':
            return ColorizerLogarithmicGradientToJSON(value);
        case 'palette':
            return ColorizerPaletteToJSON(value);
        case 'rgba':
            return ColorizerRgbaToJSON(value);
        default:
            throw new Error(`No variant of Colorizer exists with 'type=${value['type']}'`);
    }
}
