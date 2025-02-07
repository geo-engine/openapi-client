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
 * @export
 */
export const StaticNumberParamTypeEnum = {
    Static: 'static',
    Derived: 'derived'
};
/**
 * Check if a given object implements the StaticNumberParam interface.
 */
export function instanceOfStaticNumberParam(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
export function StaticNumberParamFromJSON(json) {
    return StaticNumberParamFromJSONTyped(json, false);
}
export function StaticNumberParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
        'value': json['value'],
    };
}
export function StaticNumberParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
        'value': value.value,
    };
}
