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
import type { Colorizer } from './Colorizer';
import {
    ColorizerFromJSON,
    ColorizerFromJSONTyped,
    ColorizerToJSON,
} from './Colorizer';

/**
 * 
 * @export
 * @interface DerivedColor
 */
export interface DerivedColor {
    /**
     * 
     * @type {string}
     * @memberof DerivedColor
     */
    attribute: string;
    /**
     * 
     * @type {Colorizer}
     * @memberof DerivedColor
     */
    colorizer: Colorizer;
    /**
     * 
     * @type {string}
     * @memberof DerivedColor
     */
    type: DerivedColorTypeEnum;
}


/**
 * @export
 */
export const DerivedColorTypeEnum = {
    Derived: 'derived'
} as const;
export type DerivedColorTypeEnum = typeof DerivedColorTypeEnum[keyof typeof DerivedColorTypeEnum];


/**
 * Check if a given object implements the DerivedColor interface.
 */
export function instanceOfDerivedColor(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "attribute" in value;
    isInstance = isInstance && "colorizer" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function DerivedColorFromJSON(json: any): DerivedColor {
    return DerivedColorFromJSONTyped(json, false);
}

export function DerivedColorFromJSONTyped(json: any, ignoreDiscriminator: boolean): DerivedColor {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribute': json['attribute'],
        'colorizer': ColorizerFromJSON(json['colorizer']),
        'type': json['type'],
    };
}

export function DerivedColorToJSON(value?: DerivedColor | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribute': value.attribute,
        'colorizer': ColorizerToJSON(value.colorizer),
        'type': value.type,
    };
}

