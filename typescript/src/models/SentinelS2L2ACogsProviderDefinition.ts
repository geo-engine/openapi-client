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

import { mapValues } from '../runtime';
import type { StacApiRetries } from './StacApiRetries';
import {
    StacApiRetriesFromJSON,
    StacApiRetriesFromJSONTyped,
    StacApiRetriesToJSON,
    StacApiRetriesToJSONTyped,
} from './StacApiRetries';
import type { StacBand } from './StacBand';
import {
    StacBandFromJSON,
    StacBandFromJSONTyped,
    StacBandToJSON,
    StacBandToJSONTyped,
} from './StacBand';
import type { StacQueryBuffer } from './StacQueryBuffer';
import {
    StacQueryBufferFromJSON,
    StacQueryBufferFromJSONTyped,
    StacQueryBufferToJSON,
    StacQueryBufferToJSONTyped,
} from './StacQueryBuffer';
import type { StacZone } from './StacZone';
import {
    StacZoneFromJSON,
    StacZoneFromJSONTyped,
    StacZoneToJSON,
    StacZoneToJSONTyped,
} from './StacZone';

/**
 * 
 * @export
 * @interface SentinelS2L2ACogsProviderDefinition
 */
export interface SentinelS2L2ACogsProviderDefinition {
    /**
     * 
     * @type {string}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    apiUrl: string;
    /**
     * 
     * @type {Array<StacBand>}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    bands: Array<StacBand>;
    /**
     * 
     * @type {number}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    cacheTtl?: number;
    /**
     * 
     * @type {string}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    description: string;
    /**
     * 
     * @type {number}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    gdalRetries?: number;
    /**
     * 
     * @type {string}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    priority?: number | null;
    /**
     * 
     * @type {StacQueryBuffer}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    queryBuffer?: StacQueryBuffer;
    /**
     * 
     * @type {StacApiRetries}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    stacApiRetries?: StacApiRetries;
    /**
     * 
     * @type {string}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    type: SentinelS2L2ACogsProviderDefinitionTypeEnum;
    /**
     * 
     * @type {Array<StacZone>}
     * @memberof SentinelS2L2ACogsProviderDefinition
     */
    zones: Array<StacZone>;
}


/**
 * @export
 */
export const SentinelS2L2ACogsProviderDefinitionTypeEnum = {
    SentinelS2L2ACogs: 'SentinelS2L2ACogs'
} as const;
export type SentinelS2L2ACogsProviderDefinitionTypeEnum = typeof SentinelS2L2ACogsProviderDefinitionTypeEnum[keyof typeof SentinelS2L2ACogsProviderDefinitionTypeEnum];


/**
 * Check if a given object implements the SentinelS2L2ACogsProviderDefinition interface.
 */
export function instanceOfSentinelS2L2ACogsProviderDefinition(value: object): value is SentinelS2L2ACogsProviderDefinition {
    if (!('apiUrl' in value) || value['apiUrl'] === undefined) return false;
    if (!('bands' in value) || value['bands'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('zones' in value) || value['zones'] === undefined) return false;
    return true;
}

export function SentinelS2L2ACogsProviderDefinitionFromJSON(json: any): SentinelS2L2ACogsProviderDefinition {
    return SentinelS2L2ACogsProviderDefinitionFromJSONTyped(json, false);
}

export function SentinelS2L2ACogsProviderDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SentinelS2L2ACogsProviderDefinition {
    if (json == null) {
        return json;
    }
    return {
        
        'apiUrl': json['apiUrl'],
        'bands': ((json['bands'] as Array<any>).map(StacBandFromJSON)),
        'cacheTtl': json['cacheTtl'] == null ? undefined : json['cacheTtl'],
        'description': json['description'],
        'gdalRetries': json['gdalRetries'] == null ? undefined : json['gdalRetries'],
        'id': json['id'],
        'name': json['name'],
        'priority': json['priority'] == null ? undefined : json['priority'],
        'queryBuffer': json['queryBuffer'] == null ? undefined : StacQueryBufferFromJSON(json['queryBuffer']),
        'stacApiRetries': json['stacApiRetries'] == null ? undefined : StacApiRetriesFromJSON(json['stacApiRetries']),
        'type': json['type'],
        'zones': ((json['zones'] as Array<any>).map(StacZoneFromJSON)),
    };
}

export function SentinelS2L2ACogsProviderDefinitionToJSON(json: any): SentinelS2L2ACogsProviderDefinition {
    return SentinelS2L2ACogsProviderDefinitionToJSONTyped(json, false);
}

export function SentinelS2L2ACogsProviderDefinitionToJSONTyped(value?: SentinelS2L2ACogsProviderDefinition | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'apiUrl': value['apiUrl'],
        'bands': ((value['bands'] as Array<any>).map(StacBandToJSON)),
        'cacheTtl': value['cacheTtl'],
        'description': value['description'],
        'gdalRetries': value['gdalRetries'],
        'id': value['id'],
        'name': value['name'],
        'priority': value['priority'],
        'queryBuffer': StacQueryBufferToJSON(value['queryBuffer']),
        'stacApiRetries': StacApiRetriesToJSON(value['stacApiRetries']),
        'type': value['type'],
        'zones': ((value['zones'] as Array<any>).map(StacZoneToJSON)),
    };
}

