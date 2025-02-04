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
import { OgrSourceDatasetFromJSON, OgrSourceDatasetToJSON, } from './OgrSourceDataset';
import { VectorResultDescriptorFromJSON, VectorResultDescriptorToJSON, } from './VectorResultDescriptor';
/**
 * @export
 */
export const OgrMetaDataTypeEnum = {
    OgrMetaData: 'OgrMetaData'
};
/**
 * Check if a given object implements the OgrMetaData interface.
 */
export function instanceOfOgrMetaData(value) {
    let isInstance = true;
    isInstance = isInstance && "loadingInfo" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function OgrMetaDataFromJSON(json) {
    return OgrMetaDataFromJSONTyped(json, false);
}
export function OgrMetaDataFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'loadingInfo': OgrSourceDatasetFromJSON(json['loadingInfo']),
        'resultDescriptor': VectorResultDescriptorFromJSON(json['resultDescriptor']),
        'type': json['type'],
    };
}
export function OgrMetaDataToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'loadingInfo': OgrSourceDatasetToJSON(value.loadingInfo),
        'resultDescriptor': VectorResultDescriptorToJSON(value.resultDescriptor),
        'type': value.type,
    };
}
