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

import { mapValues } from '../runtime';
import type { OgrSourceColumnSpec } from './OgrSourceColumnSpec';
import {
    OgrSourceColumnSpecFromJSON,
    OgrSourceColumnSpecFromJSONTyped,
    OgrSourceColumnSpecToJSON,
} from './OgrSourceColumnSpec';
import type { OgrSourceDatasetTimeType } from './OgrSourceDatasetTimeType';
import {
    OgrSourceDatasetTimeTypeFromJSON,
    OgrSourceDatasetTimeTypeFromJSONTyped,
    OgrSourceDatasetTimeTypeToJSON,
} from './OgrSourceDatasetTimeType';
import type { OgrSourceErrorSpec } from './OgrSourceErrorSpec';
import {
    OgrSourceErrorSpecFromJSON,
    OgrSourceErrorSpecFromJSONTyped,
    OgrSourceErrorSpecToJSON,
} from './OgrSourceErrorSpec';
import type { TypedGeometry } from './TypedGeometry';
import {
    TypedGeometryFromJSON,
    TypedGeometryFromJSONTyped,
    TypedGeometryToJSON,
} from './TypedGeometry';
import type { VectorDataType } from './VectorDataType';
import {
    VectorDataTypeFromJSON,
    VectorDataTypeFromJSONTyped,
    VectorDataTypeToJSON,
} from './VectorDataType';

/**
 * 
 * @export
 * @interface OgrSourceDataset
 */
export interface OgrSourceDataset {
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDataset
     */
    attributeQuery?: string;
    /**
     * 
     * @type {number}
     * @memberof OgrSourceDataset
     */
    cacheTtl?: number;
    /**
     * 
     * @type {OgrSourceColumnSpec}
     * @memberof OgrSourceDataset
     */
    columns?: OgrSourceColumnSpec;
    /**
     * 
     * @type {VectorDataType}
     * @memberof OgrSourceDataset
     */
    dataType?: VectorDataType;
    /**
     * 
     * @type {TypedGeometry}
     * @memberof OgrSourceDataset
     */
    defaultGeometry?: TypedGeometry;
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDataset
     */
    fileName: string;
    /**
     * 
     * @type {boolean}
     * @memberof OgrSourceDataset
     */
    forceOgrSpatialFilter?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof OgrSourceDataset
     */
    forceOgrTimeFilter?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDataset
     */
    layerName: string;
    /**
     * 
     * @type {OgrSourceErrorSpec}
     * @memberof OgrSourceDataset
     */
    onError: OgrSourceErrorSpec;
    /**
     * 
     * @type {string}
     * @memberof OgrSourceDataset
     */
    sqlQuery?: string;
    /**
     * 
     * @type {OgrSourceDatasetTimeType}
     * @memberof OgrSourceDataset
     */
    time?: OgrSourceDatasetTimeType;
}

/**
 * Check if a given object implements the OgrSourceDataset interface.
 */
export function instanceOfOgrSourceDataset(value: object): boolean {
    if (!('fileName' in value)) return false;
    if (!('layerName' in value)) return false;
    if (!('onError' in value)) return false;
    return true;
}

export function OgrSourceDatasetFromJSON(json: any): OgrSourceDataset {
    return OgrSourceDatasetFromJSONTyped(json, false);
}

export function OgrSourceDatasetFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceDataset {
    if (json == null) {
        return json;
    }
    return {
        
        'attributeQuery': json['attributeQuery'] == null ? undefined : json['attributeQuery'],
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'columns': json['columns'] == null ? undefined : OgrSourceColumnSpecFromJSON(json['columns']),
        'dataType': json['dataType'] == null ? undefined : VectorDataTypeFromJSON(json['dataType']),
        'defaultGeometry': json['defaultGeometry'] == null ? undefined : TypedGeometryFromJSON(json['defaultGeometry']),
        'fileName': json['fileName'],
        'forceOgrSpatialFilter': json['forceOgrSpatialFilter'] == null ? undefined : json['forceOgrSpatialFilter'],
        'forceOgrTimeFilter': json['forceOgrTimeFilter'] == null ? undefined : json['forceOgrTimeFilter'],
        'layerName': json['layerName'],
        'onError': OgrSourceErrorSpecFromJSON(json['onError']),
        'sqlQuery': json['sqlQuery'] == null ? undefined : json['sqlQuery'],
        'time': json['time'] == null ? undefined : OgrSourceDatasetTimeTypeFromJSON(json['time']),
    };
}

export function OgrSourceDatasetToJSON(value?: OgrSourceDataset | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attributeQuery': value['attributeQuery'],
        'cacheTtl': value['cacheTtl'],
        'columns': OgrSourceColumnSpecToJSON(value['columns']),
        'dataType': VectorDataTypeToJSON(value['dataType']),
        'defaultGeometry': TypedGeometryToJSON(value['defaultGeometry']),
        'fileName': value['fileName'],
        'forceOgrSpatialFilter': value['forceOgrSpatialFilter'],
        'forceOgrTimeFilter': value['forceOgrTimeFilter'],
        'layerName': value['layerName'],
        'onError': OgrSourceErrorSpecToJSON(value['onError']),
        'sqlQuery': value['sqlQuery'],
        'time': OgrSourceDatasetTimeTypeToJSON(value['time']),
    };
}

