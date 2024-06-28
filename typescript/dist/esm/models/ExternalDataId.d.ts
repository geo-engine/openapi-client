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
 * @interface ExternalDataId
 */
export interface ExternalDataId {
    /**
     *
     * @type {string}
     * @memberof ExternalDataId
     */
    layerId: string;
    /**
     *
     * @type {string}
     * @memberof ExternalDataId
     */
    providerId: string;
    /**
     *
     * @type {string}
     * @memberof ExternalDataId
     */
    type: ExternalDataIdTypeEnum;
}
/**
 * @export
 */
export declare const ExternalDataIdTypeEnum: {
    readonly External: "external";
};
export type ExternalDataIdTypeEnum = typeof ExternalDataIdTypeEnum[keyof typeof ExternalDataIdTypeEnum];
/**
 * Check if a given object implements the ExternalDataId interface.
 */
export declare function instanceOfExternalDataId(value: object): boolean;
export declare function ExternalDataIdFromJSON(json: any): ExternalDataId;
export declare function ExternalDataIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDataId;
export declare function ExternalDataIdToJSON(value?: ExternalDataId | null): any;
