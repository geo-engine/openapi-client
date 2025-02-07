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
import { ColorParamStaticFromJSONTyped, ColorParamStaticToJSON, } from './ColorParamStatic';
import { DerivedColorFromJSONTyped, DerivedColorToJSON, } from './DerivedColor';
export function ColorParamFromJSON(json) {
    return ColorParamFromJSONTyped(json, false);
}
export function ColorParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'derived':
            return Object.assign(Object.assign({}, DerivedColorFromJSONTyped(json, true)), { type: 'derived' });
        case 'static':
            return Object.assign(Object.assign({}, ColorParamStaticFromJSONTyped(json, true)), { type: 'static' });
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${json['type']}'`);
    }
}
export function ColorParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'derived':
            return DerivedColorToJSON(value);
        case 'static':
            return ColorParamStaticToJSON(value);
        default:
            throw new Error(`No variant of ColorParam exists with 'type=${value['type']}'`);
    }
}
