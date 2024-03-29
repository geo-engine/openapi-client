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
 * @interface DerivedNumberWithType
 */
export interface DerivedNumberWithType {
    /**
     * 
     * @type {string}
     * @memberof DerivedNumberWithType
     */
    attribute: string;
    /**
     * 
     * @type {number}
     * @memberof DerivedNumberWithType
     */
    defaultValue: number;
    /**
     * 
     * @type {number}
     * @memberof DerivedNumberWithType
     */
    factor: number;
    /**
     * 
     * @type {string}
     * @memberof DerivedNumberWithType
     */
    type: DerivedNumberWithTypeTypeEnum;
}


/**
 * @export
 */
export const DerivedNumberWithTypeTypeEnum = {
    Derived: 'derived'
} as const;
export type DerivedNumberWithTypeTypeEnum = typeof DerivedNumberWithTypeTypeEnum[keyof typeof DerivedNumberWithTypeTypeEnum];


/**
 * Check if a given object implements the DerivedNumberWithType interface.
 */
export function instanceOfDerivedNumberWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "defaultValue" in value;
    isInstance = isInstance && "factor" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DerivedNumberWithTypeFromJSON(json: any): DerivedNumberWithType {
    return DerivedNumberWithTypeFromJSONTyped(json, false);
}

export function DerivedNumberWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DerivedNumberWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'defaultValue': json['defaultValue'],
        'factor': json['factor'],
        'type': json['type'],
    };
}

export function DerivedNumberWithTypeToJSON(value?: DerivedNumberWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute': value.attribute,
        'defaultValue': value.defaultValue,
        'factor': value.factor,
        'type': value.type,
    };
}

