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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface MlModelResource
 */
export interface MlModelResource {
    /**
     * 
     * @type {string}
     * @memberof MlModelResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof MlModelResource
     */
    type: MlModelResourceTypeEnum;
}


/**
 * @export
 */
export const MlModelResourceTypeEnum = {
    MlModel: 'mlModel'
} as const;
export type MlModelResourceTypeEnum = typeof MlModelResourceTypeEnum[keyof typeof MlModelResourceTypeEnum];


/**
 * Check if a given object implements the MlModelResource interface.
 */
export function instanceOfMlModelResource(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function MlModelResourceFromJSON(json: any): MlModelResource {
    return MlModelResourceFromJSONTyped(json, false);
}

export function MlModelResourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): MlModelResource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function MlModelResourceToJSON(value?: MlModelResource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'type': value.type,
    };
}

