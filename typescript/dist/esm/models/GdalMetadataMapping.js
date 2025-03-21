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
import { RasterPropertiesKeyFromJSON, RasterPropertiesKeyToJSON, } from './RasterPropertiesKey';
import { RasterPropertiesEntryTypeFromJSON, RasterPropertiesEntryTypeToJSON, } from './RasterPropertiesEntryType';
/**
 * Check if a given object implements the GdalMetadataMapping interface.
 */
export function instanceOfGdalMetadataMapping(value) {
    if (!('sourceKey' in value) || value['sourceKey'] === undefined)
        return false;
    if (!('targetKey' in value) || value['targetKey'] === undefined)
        return false;
    if (!('targetType' in value) || value['targetType'] === undefined)
        return false;
    return true;
}
export function GdalMetadataMappingFromJSON(json) {
    return GdalMetadataMappingFromJSONTyped(json, false);
}
export function GdalMetadataMappingFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'sourceKey': RasterPropertiesKeyFromJSON(json['source_key']),
        'targetKey': RasterPropertiesKeyFromJSON(json['target_key']),
        'targetType': RasterPropertiesEntryTypeFromJSON(json['target_type']),
    };
}
export function GdalMetadataMappingToJSON(json) {
    return GdalMetadataMappingToJSONTyped(json, false);
}
export function GdalMetadataMappingToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'source_key': RasterPropertiesKeyToJSON(value['sourceKey']),
        'target_key': RasterPropertiesKeyToJSON(value['targetKey']),
        'target_type': RasterPropertiesEntryTypeToJSON(value['targetType']),
    };
}
