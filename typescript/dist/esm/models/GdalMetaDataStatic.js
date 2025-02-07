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
import { exists } from '../runtime';
import { GdalDatasetParametersFromJSON, GdalDatasetParametersToJSON, } from './GdalDatasetParameters';
import { RasterResultDescriptorFromJSON, RasterResultDescriptorToJSON, } from './RasterResultDescriptor';
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * @export
 */
export const GdalMetaDataStaticTypeEnum = {
    GdalStatic: 'GdalStatic'
};
/**
 * Check if a given object implements the GdalMetaDataStatic interface.
 */
export function instanceOfGdalMetaDataStatic(value) {
    let isInstance = true;
    isInstance = isInstance && "params" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function GdalMetaDataStaticFromJSON(json) {
    return GdalMetaDataStaticFromJSONTyped(json, false);
}
export function GdalMetaDataStaticFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cacheTtl': !exists(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'params': GdalDatasetParametersFromJSON(json['params']),
        'resultDescriptor': RasterResultDescriptorFromJSON(json['resultDescriptor']),
        'time': !exists(json, 'time') ? undefined : TimeIntervalFromJSON(json['time']),
        'type': json['type'],
    };
}
export function GdalMetaDataStaticToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cacheTtl': value.cacheTtl,
        'params': GdalDatasetParametersToJSON(value.params),
        'resultDescriptor': RasterResultDescriptorToJSON(value.resultDescriptor),
        'time': TimeIntervalToJSON(value.time),
        'type': value.type,
    };
}
