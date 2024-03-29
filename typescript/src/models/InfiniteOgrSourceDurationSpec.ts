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
/**
 * 
 * @export
 * @interface InfiniteOgrSourceDurationSpec
 */
export interface InfiniteOgrSourceDurationSpec {
    /**
     * 
     * @type {string}
     * @memberof InfiniteOgrSourceDurationSpec
     */
    type: InfiniteOgrSourceDurationSpecTypeEnum;
}


/**
 * @export
 */
export const InfiniteOgrSourceDurationSpecTypeEnum = {
    Infinite: 'infinite'
} as const;
export type InfiniteOgrSourceDurationSpecTypeEnum = typeof InfiniteOgrSourceDurationSpecTypeEnum[keyof typeof InfiniteOgrSourceDurationSpecTypeEnum];


/**
 * Check if a given object implements the InfiniteOgrSourceDurationSpec interface.
 */
export function instanceOfInfiniteOgrSourceDurationSpec(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function InfiniteOgrSourceDurationSpecFromJSON(json: any): InfiniteOgrSourceDurationSpec {
    return InfiniteOgrSourceDurationSpecFromJSONTyped(json, false);
}

export function InfiniteOgrSourceDurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfiniteOgrSourceDurationSpec {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': json['type'],
    };
}

export function InfiniteOgrSourceDurationSpecToJSON(value?: InfiniteOgrSourceDurationSpec | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
    };
}

