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
 * @interface OperatorQuota
 */
export interface OperatorQuota {
    /**
     *
     * @type {number}
     * @memberof OperatorQuota
     */
    count: number;
    /**
     *
     * @type {string}
     * @memberof OperatorQuota
     */
    operatorName: string;
    /**
     *
     * @type {string}
     * @memberof OperatorQuota
     */
    operatorPath: string;
}
/**
 * Check if a given object implements the OperatorQuota interface.
 */
export declare function instanceOfOperatorQuota(value: object): boolean;
export declare function OperatorQuotaFromJSON(json: any): OperatorQuota;
export declare function OperatorQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): OperatorQuota;
export declare function OperatorQuotaToJSON(value?: OperatorQuota | null): any;
