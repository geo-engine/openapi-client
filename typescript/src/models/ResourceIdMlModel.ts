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
 * @interface ResourceIdMlModel
 */
export interface ResourceIdMlModel {
    /**
     * 
     * @type {string}
     * @memberof ResourceIdMlModel
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ResourceIdMlModel
     */
    type: ResourceIdMlModelTypeEnum;
}


/**
 * @export
 */
export const ResourceIdMlModelTypeEnum = {
    MlModel: 'MlModel'
} as const;
export type ResourceIdMlModelTypeEnum = typeof ResourceIdMlModelTypeEnum[keyof typeof ResourceIdMlModelTypeEnum];


/**
 * Check if a given object implements the ResourceIdMlModel interface.
 */
export function instanceOfResourceIdMlModel(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ResourceIdMlModelFromJSON(json: any): ResourceIdMlModel {
    return ResourceIdMlModelFromJSONTyped(json, false);
}

export function ResourceIdMlModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdMlModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': json['type'],
    };
}

export function ResourceIdMlModelToJSON(value?: ResourceIdMlModel | null): any {
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

