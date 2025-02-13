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
    classes: {
        [key: string]: string;
    };
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
export declare const ClassificationMeasurementTypeEnum: {
    readonly Classification: "classification";
};
export type ClassificationMeasurementTypeEnum = typeof ClassificationMeasurementTypeEnum[keyof typeof ClassificationMeasurementTypeEnum];
/**
 * Check if a given object implements the ClassificationMeasurement interface.
 */
export declare function instanceOfClassificationMeasurement(value: object): value is ClassificationMeasurement;
export declare function ClassificationMeasurementFromJSON(json: any): ClassificationMeasurement;
export declare function ClassificationMeasurementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ClassificationMeasurement;
export declare function ClassificationMeasurementToJSON(json: any): ClassificationMeasurement;
export declare function ClassificationMeasurementToJSONTyped(value?: ClassificationMeasurement | null, ignoreDiscriminator?: boolean): any;
