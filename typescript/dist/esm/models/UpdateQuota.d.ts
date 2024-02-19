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
/**
 *
 * @export
 * @interface UpdateQuota
 */
export interface UpdateQuota {
    /**
     *
     * @type {number}
     * @memberof UpdateQuota
     */
    available: number;
}
/**
 * Check if a given object implements the UpdateQuota interface.
 */
export declare function instanceOfUpdateQuota(value: object): boolean;
export declare function UpdateQuotaFromJSON(json: any): UpdateQuota;
export declare function UpdateQuotaFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateQuota;
export declare function UpdateQuotaToJSON(value?: UpdateQuota | null): any;