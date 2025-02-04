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
import { TimeIntervalFromJSON, TimeIntervalToJSON, } from './TimeInterval';
/**
 * Check if a given object implements the GdalLoadingInfoTemporalSlice interface.
 */
export function instanceOfGdalLoadingInfoTemporalSlice(value) {
    let isInstance = true;
    isInstance = isInstance && "time" in value;
    return isInstance;
}
export function GdalLoadingInfoTemporalSliceFromJSON(json) {
    return GdalLoadingInfoTemporalSliceFromJSONTyped(json, false);
}
export function GdalLoadingInfoTemporalSliceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cacheTtl': !exists(json, 'cacheTtl') ? undefined : json['cacheTtl'],
        'params': !exists(json, 'params') ? undefined : GdalDatasetParametersFromJSON(json['params']),
        'time': TimeIntervalFromJSON(json['time']),
    };
}
export function GdalLoadingInfoTemporalSliceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cacheTtl': value.cacheTtl,
        'params': GdalDatasetParametersToJSON(value.params),
        'time': TimeIntervalToJSON(value.time),
    };
}
