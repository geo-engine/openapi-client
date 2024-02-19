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
import type { MockDatasetDataSourceLoadingInfo } from './MockDatasetDataSourceLoadingInfo';
import type { VectorResultDescriptor } from './VectorResultDescriptor';
/**
 *
 * @export
 * @interface MockMetaData
 */
export interface MockMetaData {
    /**
     *
     * @type {MockDatasetDataSourceLoadingInfo}
     * @memberof MockMetaData
     */
    loadingInfo: MockDatasetDataSourceLoadingInfo;
    /**
     *
     * @type {VectorResultDescriptor}
     * @memberof MockMetaData
     */
    resultDescriptor: VectorResultDescriptor;
}
/**
 * Check if a given object implements the MockMetaData interface.
 */
export declare function instanceOfMockMetaData(value: object): boolean;
export declare function MockMetaDataFromJSON(json: any): MockMetaData;
export declare function MockMetaDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): MockMetaData;
export declare function MockMetaDataToJSON(value?: MockMetaData | null): any;