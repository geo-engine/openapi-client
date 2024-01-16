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
/**
 * @export
 */
export const StaticColorParamTypeEnum = {
    Static: 'static',
    Derived: 'derived'
};
/**
 * Check if a given object implements the StaticColorParam interface.
 */
export function instanceOfStaticColorParam(value) {
    let isInstance = true;
    isInstance = isInstance && "color" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function StaticColorParamFromJSON(json) {
    return StaticColorParamFromJSONTyped(json, false);
}
export function StaticColorParamFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'color': json['color'],
        'type': json['type'],
    };
}
export function StaticColorParamToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'color': value.color,
        'type': value.type,
    };
}
