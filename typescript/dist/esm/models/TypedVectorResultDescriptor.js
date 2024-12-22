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
import { exists, mapValues } from '../runtime';
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
import { VectorColumnInfoFromJSON, VectorColumnInfoToJSON, } from './VectorColumnInfo';
import { VectorDataTypeFromJSON, VectorDataTypeToJSON, } from './VectorDataType';
/**
 * @export
 */
export const TypedVectorResultDescriptorTypeEnum = {
    Vector: 'vector'
};
/**
 * Check if a given object implements the TypedVectorResultDescriptor interface.
 */
export function instanceOfTypedVectorResultDescriptor(value) {
    let isInstance = true;
    isInstance = isInstance && "columns" in value;
    isInstance = isInstance && "dataType" in value;
    isInstance = isInstance && "spatialReference" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function TypedVectorResultDescriptorFromJSON(json) {
    return TypedVectorResultDescriptorFromJSONTyped(json, false);
}
export function TypedVectorResultDescriptorFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bbox': !exists(json, 'bbox') ? undefined : BoundingBox2DFromJSON(json['bbox']),
        'columns': (mapValues(json['columns'], VectorColumnInfoFromJSON)),
        'dataType': VectorDataTypeFromJSON(json['dataType']),
        'spatialReference': json['spatialReference'],
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}
export function TypedVectorResultDescriptorToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bbox': BoundingBox2DToJSON(value.bbox),
        'columns': (mapValues(value.columns, VectorColumnInfoToJSON)),
        'dataType': VectorDataTypeToJSON(value.dataType),
        'spatialReference': value.spatialReference,
        'time': TimeIntervalToJSON(value.time),
        'type': value.type,
    };
}
