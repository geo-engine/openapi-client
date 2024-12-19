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
export const UnitlessMeasurementTypeEnum = {
    Unitless: 'unitless',
    Continuous: 'continuous',
    Classification: 'classification'
};
/**
 * Check if a given object implements the UnitlessMeasurement interface.
 */
export function instanceOfUnitlessMeasurement(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function UnitlessMeasurementFromJSON(json) {
    return UnitlessMeasurementFromJSONTyped(json, false);
}
export function UnitlessMeasurementFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': json['type'],
    };
}
export function UnitlessMeasurementToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': value.type,
    };
}
