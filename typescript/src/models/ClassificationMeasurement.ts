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
 * @interface ClassificationMeasurement
 */
export interface ClassificationMeasurement {
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof ClassificationMeasurement
     */
    classes: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof ClassificationMeasurement
     */
    measurement: string;
    /**
     * 
     * @type {string}
     * @memberof ClassificationMeasurement
     */
    type: ClassificationMeasurementTypeEnum;
}


/**
 * @export
 */
export const ClassificationMeasurementTypeEnum = {
    Classification: 'classification'
} as const;
export type ClassificationMeasurementTypeEnum = typeof ClassificationMeasurementTypeEnum[keyof typeof ClassificationMeasurementTypeEnum];


/**
 * Check if a given object implements the ClassificationMeasurement interface.
 */
export function instanceOfClassificationMeasurement(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "classes" in value;
    isInstance = isInstance && "measurement" in value;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ClassificationMeasurementFromJSON(json: any): ClassificationMeasurement {
    return ClassificationMeasurementFromJSONTyped(json, false);
}

export function ClassificationMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationMeasurement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'classes': json['classes'],
        'measurement': json['measurement'],
        'type': json['type'],
    };
}

export function ClassificationMeasurementToJSON(value?: ClassificationMeasurement | null): any {
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

