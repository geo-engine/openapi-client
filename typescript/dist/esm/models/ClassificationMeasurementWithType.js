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
/**
 * @export
 */
export const ClassificationMeasurementWithTypeTypeEnum = {
    Classification: 'classification'
};
/**
 * Check if a given object implements the ClassificationMeasurementWithType interface.
 */
export function instanceOfClassificationMeasurementWithType(value) {
    let isInstance = true;
    isInstance = isInstance && "classes" in value;
    isInstance = isInstance && "measurement" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function ClassificationMeasurementWithTypeFromJSON(json) {
    return ClassificationMeasurementWithTypeFromJSONTyped(json, false);
}
export function ClassificationMeasurementWithTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'classes': json['classes'],
        'measurement': json['measurement'],
        'type': json['type'],
    };
}
export function ClassificationMeasurementWithTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'classes': value.classes,
        'measurement': value.measurement,
        'type': value.type,
    };
}
