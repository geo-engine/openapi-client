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

import { exists, mapValues } from '../runtime';
import type { Symbology } from './Symbology';
import {
    SymbologyFromJSON,
    SymbologyFromJSONTyped,
    SymbologyToJSON,
} from './Symbology';
import type { TypedResultDescriptor } from './TypedResultDescriptor';
import {
    TypedResultDescriptorFromJSON,
    TypedResultDescriptorFromJSONTyped,
    TypedResultDescriptorToJSON,
} from './TypedResultDescriptor';

/**
 * 
 * @export
 * @interface DatasetListing
 */
export interface DatasetListing {
    /**
     * 
     * @type {string}
     * @memberof DatasetListing
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetListing
     */
    displayName: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetListing
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof DatasetListing
     */
    name: string;
    /**
     * 
     * @type {TypedResultDescriptor}
     * @memberof DatasetListing
     */
    resultDescriptor: TypedResultDescriptor;
    /**
     * 
     * @type {string}
     * @memberof DatasetListing
     */
    sourceOperator: string;
    /**
     * 
     * @type {Symbology}
     * @memberof DatasetListing
     */
    symbology?: Symbology | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof DatasetListing
     */
    tags: Array<string>;
}

/**
 * Check if a given object implements the DatasetListing interface.
 */
export function instanceOfDatasetListing(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "displayName" in value;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "resultDescriptor" in value;
    isInstance = isInstance && "sourceOperator" in value;
    isInstance = isInstance && "tags" in value;

    return isInstance;
}

export function DatasetListingFromJSON(json: any): DatasetListing {
    return DatasetListingFromJSONTyped(json, false);
}

export function DatasetListingFromJSONTyped(json: any, ignoreDiscriminator: boolean): DatasetListing {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': json['description'],
        'displayName': json['displayName'],
        'id': json['id'],
        'name': json['name'],
        'resultDescriptor': TypedResultDescriptorFromJSON(json['resultDescriptor']),
        'sourceOperator': json['sourceOperator'],
        'symbology': !exists(json, 'symbology') ? undefined : SymbologyFromJSON(json['symbology']),
        'tags': json['tags'],
    };
}

export function DatasetListingToJSON(value?: DatasetListing | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'displayName': value.displayName,
        'id': value.id,
        'name': value.name,
        'resultDescriptor': TypedResultDescriptorToJSON(value.resultDescriptor),
        'sourceOperator': value.sourceOperator,
        'symbology': SymbologyToJSON(value.symbology),
        'tags': value.tags,
    };
}

