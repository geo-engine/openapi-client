/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
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
export const DerivedColorWithTypeTypeEnum = {
    Derived: 'derived'
};
/**
 * Check if a given object implements the DerivedColorWithType interface.
 */
export function instanceOfDerivedColorWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "colorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function DerivedColorWithTypeFromJSON(json) {
    return DerivedColorWithTypeFromJSONTyped(json, false);
}
export function DerivedColorWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'attribute': json['attribute'],
        'colorizer': ColorizerFromJSON(json['colorizer']),
        'type': json['type'],
    };
}
export function DerivedColorWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'attribute': value.attribute,
        'colorizer': ColorizerToJSON(value.colorizer),
        'type': value.type,
    };
}
