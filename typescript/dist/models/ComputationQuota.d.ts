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
 * @interface ComputationQuota
 */
export interface ComputationQuota {
    /**
     *
     * @type {string}
     * @memberof ComputationQuota
     */
    computationId: string;
    /**
     *
     * @type {number}
     * @memberof ComputationQuota
     */
    count: number;
    /**
     *
     * @type {Date}
     * @memberof ComputationQuota
     */
    timestamp: Date;
    /**
     *
     * @type {string}
     * @memberof ComputationQuota
     */
    workflowId: string;
}
/**
 * Check if a given object implements the ComputationQuota interface.
 */
export declare function instanceOfComputationQuota(value: object): boolean;
export declare function ComputationQuotaFromJSON(json: any): ComputationQuota;
export declare function ComputationQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputationQuota;
export declare function ComputationQuotaToJSON(value?: ComputationQuota | null): any;
