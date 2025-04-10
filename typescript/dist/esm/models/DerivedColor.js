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
import { ColorizerFromJSON, ColorizerToJSON, } from './Colorizer';
/**
 * @export
 */
export const DerivedColorTypeEnum = {
    Derived: 'derived'
};
/**
 * Check if a given object implements the DerivedColor interface.
 */
export function instanceOfDerivedColor(value) {
    if (!('attribute' in value) || value['attribute'] === undefined)
        return false;
    if (!('colorizer' in value) || value['colorizer'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
export function DerivedColorFromJSON(json) {
    return DerivedColorFromJSONTyped(json, false);
}
export function DerivedColorFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'attribute': json['attribute'],
        'colorizer': ColorizerFromJSON(json['colorizer']),
        'type': json['type'],
    };
}
export function DerivedColorToJSON(json) {
    return DerivedColorToJSONTyped(json, false);
}
export function DerivedColorToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'attribute': value['attribute'],
        'colorizer': ColorizerToJSON(value['colorizer']),
        'type': value['type'],
    };
}
