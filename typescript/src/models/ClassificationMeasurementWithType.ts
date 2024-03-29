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
 * @interface ClassificationMeasurementWithType
 */
export interface ClassificationMeasurementWithType {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ClassificationMeasurementWithType
     */
    classes: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ClassificationMeasurementWithType
     */
    measurement: string;
    /**
     * 
     * @type {string}
     * @memberof ClassificationMeasurementWithType
     */
    type: ClassificationMeasurementWithTypeTypeEnum;
}


/**
 * @export
 */
export const ClassificationMeasurementWithTypeTypeEnum = {
    Classification: 'classification'
} as const;
export type ClassificationMeasurementWithTypeTypeEnum = typeof ClassificationMeasurementWithTypeTypeEnum[keyof typeof ClassificationMeasurementWithTypeTypeEnum];


/**
 * Check if a given object implements the ClassificationMeasurementWithType interface.
 */
export function instanceOfClassificationMeasurementWithType(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "classes" in value;
    isInstance = isInstance && "measurement" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ClassificationMeasurementWithTypeFromJSON(json: any): ClassificationMeasurementWithType {
    return ClassificationMeasurementWithTypeFromJSONTyped(json, false);
}

export function ClassificationMeasurementWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationMeasurementWithType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classes': json['classes'],
        'measurement': json['measurement'],
        'type': json['type'],
    };
}

export function ClassificationMeasurementWithTypeToJSON(value?: ClassificationMeasurementWithType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'classes': value.classes,
        'measurement': value.measurement,
        'type': value.type,
    };
}

