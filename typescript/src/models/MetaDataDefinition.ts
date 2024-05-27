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

import type { MetaDataDefinitionGdalMetaDataList } from './MetaDataDefinitionGdalMetaDataList';
import {
    instanceOfMetaDataDefinitionGdalMetaDataList,
    MetaDataDefinitionGdalMetaDataListFromJSON,
    MetaDataDefinitionGdalMetaDataListFromJSONTyped,
    MetaDataDefinitionGdalMetaDataListToJSON,
} from './MetaDataDefinitionGdalMetaDataList';
import type { MetaDataDefinitionGdalMetaDataRegular } from './MetaDataDefinitionGdalMetaDataRegular';
import {
    instanceOfMetaDataDefinitionGdalMetaDataRegular,
    MetaDataDefinitionGdalMetaDataRegularFromJSON,
    MetaDataDefinitionGdalMetaDataRegularFromJSONTyped,
    MetaDataDefinitionGdalMetaDataRegularToJSON,
} from './MetaDataDefinitionGdalMetaDataRegular';
import type { MetaDataDefinitionGdalMetadataNetCdfCf } from './MetaDataDefinitionGdalMetadataNetCdfCf';
import {
    instanceOfMetaDataDefinitionGdalMetadataNetCdfCf,
    MetaDataDefinitionGdalMetadataNetCdfCfFromJSON,
    MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped,
    MetaDataDefinitionGdalMetadataNetCdfCfToJSON,
} from './MetaDataDefinitionGdalMetadataNetCdfCf';
import type { MetaDataDefinitionGdalStatic } from './MetaDataDefinitionGdalStatic';
import {
    instanceOfMetaDataDefinitionGdalStatic,
    MetaDataDefinitionGdalStaticFromJSON,
    MetaDataDefinitionGdalStaticFromJSONTyped,
    MetaDataDefinitionGdalStaticToJSON,
} from './MetaDataDefinitionGdalStatic';
import type { MetaDataDefinitionMockMetaData } from './MetaDataDefinitionMockMetaData';
import {
    instanceOfMetaDataDefinitionMockMetaData,
    MetaDataDefinitionMockMetaDataFromJSON,
    MetaDataDefinitionMockMetaDataFromJSONTyped,
    MetaDataDefinitionMockMetaDataToJSON,
} from './MetaDataDefinitionMockMetaData';
import type { MetaDataDefinitionOgrMetaData } from './MetaDataDefinitionOgrMetaData';
import {
    instanceOfMetaDataDefinitionOgrMetaData,
    MetaDataDefinitionOgrMetaDataFromJSON,
    MetaDataDefinitionOgrMetaDataFromJSONTyped,
    MetaDataDefinitionOgrMetaDataToJSON,
} from './MetaDataDefinitionOgrMetaData';

/**
 * @type MetaDataDefinition
 * 
 * @export
 */
export type MetaDataDefinition = { type: 'GdalMetaDataList' } & MetaDataDefinitionGdalMetaDataList | { type: 'GdalMetaDataRegular' } & MetaDataDefinitionGdalMetaDataRegular | { type: 'GdalMetadataNetCdfCf' } & MetaDataDefinitionGdalMetadataNetCdfCf | { type: 'GdalStatic' } & MetaDataDefinitionGdalStatic | { type: 'MockMetaData' } & MetaDataDefinitionMockMetaData | { type: 'OgrMetaData' } & MetaDataDefinitionOgrMetaData;

export function MetaDataDefinitionFromJSON(json: any): MetaDataDefinition {
    return MetaDataDefinitionFromJSONTyped(json, false);
}

export function MetaDataDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinition {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'GdalMetaDataList':
            return Object.assign({}, MetaDataDefinitionGdalMetaDataListFromJSONTyped(json, true), { type: 'GdalMetaDataList' });
        case 'GdalMetaDataRegular':
            return Object.assign({}, MetaDataDefinitionGdalMetaDataRegularFromJSONTyped(json, true), { type: 'GdalMetaDataRegular' });
        case 'GdalMetadataNetCdfCf':
            return Object.assign({}, MetaDataDefinitionGdalMetadataNetCdfCfFromJSONTyped(json, true), { type: 'GdalMetadataNetCdfCf' });
        case 'GdalStatic':
            return Object.assign({}, MetaDataDefinitionGdalStaticFromJSONTyped(json, true), { type: 'GdalStatic' });
        case 'MockMetaData':
            return Object.assign({}, MetaDataDefinitionMockMetaDataFromJSONTyped(json, true), { type: 'MockMetaData' });
        case 'OgrMetaData':
            return Object.assign({}, MetaDataDefinitionOgrMetaDataFromJSONTyped(json, true), { type: 'OgrMetaData' });
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${json['type']}'`);
    }
}

export function MetaDataDefinitionToJSON(value?: MetaDataDefinition | null): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'GdalMetaDataList':
            return MetaDataDefinitionGdalMetaDataListToJSON(value);
        case 'GdalMetaDataRegular':
            return MetaDataDefinitionGdalMetaDataRegularToJSON(value);
        case 'GdalMetadataNetCdfCf':
            return MetaDataDefinitionGdalMetadataNetCdfCfToJSON(value);
        case 'GdalStatic':
            return MetaDataDefinitionGdalStaticToJSON(value);
        case 'MockMetaData':
            return MetaDataDefinitionMockMetaDataToJSON(value);
        case 'OgrMetaData':
            return MetaDataDefinitionOgrMetaDataToJSON(value);
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${value['type']}'`);
    }

}

