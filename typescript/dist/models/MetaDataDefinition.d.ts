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
import type { MetaDataDefinitionGdalMetaDataRegular } from './MetaDataDefinitionGdalMetaDataRegular';
import type { MetaDataDefinitionGdalMetadataNetCdfCf } from './MetaDataDefinitionGdalMetadataNetCdfCf';
import type { MetaDataDefinitionGdalStatic } from './MetaDataDefinitionGdalStatic';
import type { MetaDataDefinitionMockMetaData } from './MetaDataDefinitionMockMetaData';
import type { MetaDataDefinitionOgrMetaData } from './MetaDataDefinitionOgrMetaData';
/**
 * @type MetaDataDefinition
 *
 * @export
 */
export type MetaDataDefinition = {
    type: 'GdalMetaDataList';
} & MetaDataDefinitionGdalMetaDataList | {
    type: 'GdalMetaDataRegular';
} & MetaDataDefinitionGdalMetaDataRegular | {
    type: 'GdalMetadataNetCdfCf';
} & MetaDataDefinitionGdalMetadataNetCdfCf | {
    type: 'GdalStatic';
} & MetaDataDefinitionGdalStatic | {
    type: 'MockMetaData';
} & MetaDataDefinitionMockMetaData | {
    type: 'OgrMetaData';
} & MetaDataDefinitionOgrMetaData;
export declare function MetaDataDefinitionFromJSON(json: any): MetaDataDefinition;
export declare function MetaDataDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetaDataDefinition;
export declare function MetaDataDefinitionToJSON(value?: MetaDataDefinition | null): any;
