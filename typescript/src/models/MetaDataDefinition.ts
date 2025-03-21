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

import type { GdalMetaDataList } from './GdalMetaDataList';
import {
    instanceOfGdalMetaDataList,
    GdalMetaDataListFromJSON,
    GdalMetaDataListFromJSONTyped,
    GdalMetaDataListToJSON,
} from './GdalMetaDataList';
import type { GdalMetaDataRegular } from './GdalMetaDataRegular';
import {
    instanceOfGdalMetaDataRegular,
    GdalMetaDataRegularFromJSON,
    GdalMetaDataRegularFromJSONTyped,
    GdalMetaDataRegularToJSON,
} from './GdalMetaDataRegular';
import type { GdalMetaDataStatic } from './GdalMetaDataStatic';
import {
    instanceOfGdalMetaDataStatic,
    GdalMetaDataStaticFromJSON,
    GdalMetaDataStaticFromJSONTyped,
    GdalMetaDataStaticToJSON,
} from './GdalMetaDataStatic';
import type { GdalMetadataNetCdfCf } from './GdalMetadataNetCdfCf';
import {
    instanceOfGdalMetadataNetCdfCf,
    GdalMetadataNetCdfCfFromJSON,
    GdalMetadataNetCdfCfFromJSONTyped,
    GdalMetadataNetCdfCfToJSON,
} from './GdalMetadataNetCdfCf';
import type { MockMetaData } from './MockMetaData';
import {
    instanceOfMockMetaData,
    MockMetaDataFromJSON,
    MockMetaDataFromJSONTyped,
    MockMetaDataToJSON,
} from './MockMetaData';
import type { OgrMetaData } from './OgrMetaData';
import {
    instanceOfOgrMetaData,
    OgrMetaDataFromJSON,
    OgrMetaDataFromJSONTyped,
    OgrMetaDataToJSON,
} from './OgrMetaData';

/**
 * @type MetaDataDefinition
 * 
 * @export
 */
export type MetaDataDefinition = { type: 'GdalMetaDataList' } & GdalMetaDataList | { type: 'GdalMetaDataNetCdfCf' } & GdalMetadataNetCdfCf | { type: 'GdalMetaDataRegular' } & GdalMetaDataRegular | { type: 'GdalStatic' } & GdalMetaDataStatic | { type: 'MockMetaData' } & MockMetaData | { type: 'OgrMetaData' } & OgrMetaData;

export function MetaDataDefinitionFromJSON(json: any): MetaDataDefinition {
    return MetaDataDefinitionFromJSONTyped(json, false);
}

export function MetaDataDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinition {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'GdalMetaDataList':
            return Object.assign({}, GdalMetaDataListFromJSONTyped(json, true), { type: 'GdalMetaDataList' } as const);
        case 'GdalMetaDataNetCdfCf':
            return Object.assign({}, GdalMetadataNetCdfCfFromJSONTyped(json, true), { type: 'GdalMetaDataNetCdfCf' } as const);
        case 'GdalMetaDataRegular':
            return Object.assign({}, GdalMetaDataRegularFromJSONTyped(json, true), { type: 'GdalMetaDataRegular' } as const);
        case 'GdalStatic':
            return Object.assign({}, GdalMetaDataStaticFromJSONTyped(json, true), { type: 'GdalStatic' } as const);
        case 'MockMetaData':
            return Object.assign({}, MockMetaDataFromJSONTyped(json, true), { type: 'MockMetaData' } as const);
        case 'OgrMetaData':
            return Object.assign({}, OgrMetaDataFromJSONTyped(json, true), { type: 'OgrMetaData' } as const);
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${json['type']}'`);
    }
}

export function MetaDataDefinitionToJSON(json: any): any {
    return MetaDataDefinitionToJSONTyped(json, false);
}

export function MetaDataDefinitionToJSONTyped(value?: MetaDataDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'GdalMetaDataList':
            return Object.assign({}, GdalMetaDataListToJSON(value), { type: 'GdalMetaDataList' } as const);
        case 'GdalMetaDataNetCdfCf':
            return Object.assign({}, GdalMetadataNetCdfCfToJSON(value), { type: 'GdalMetaDataNetCdfCf' } as const);
        case 'GdalMetaDataRegular':
            return Object.assign({}, GdalMetaDataRegularToJSON(value), { type: 'GdalMetaDataRegular' } as const);
        case 'GdalStatic':
            return Object.assign({}, GdalMetaDataStaticToJSON(value), { type: 'GdalStatic' } as const);
        case 'MockMetaData':
            return Object.assign({}, MockMetaDataToJSON(value), { type: 'MockMetaData' } as const);
        case 'OgrMetaData':
            return Object.assign({}, OgrMetaDataToJSON(value), { type: 'OgrMetaData' } as const);
        default:
            throw new Error(`No variant of MetaDataDefinition exists with 'type=${value['type']}'`);
    }

}

