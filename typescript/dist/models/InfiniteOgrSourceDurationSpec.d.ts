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
 * @interface InfiniteOgrSourceDurationSpec
 */
export interface InfiniteOgrSourceDurationSpec {
    /**
     *
     * @type {string}
     * @memberof InfiniteOgrSourceDurationSpec
     */
    type: InfiniteOgrSourceDurationSpecTypeEnum;
}
/**
 * @export
 */
export declare const InfiniteOgrSourceDurationSpecTypeEnum: {
    readonly Infinite: "infinite";
};
export type InfiniteOgrSourceDurationSpecTypeEnum = typeof InfiniteOgrSourceDurationSpecTypeEnum[keyof typeof InfiniteOgrSourceDurationSpecTypeEnum];
/**
 * Check if a given object implements the InfiniteOgrSourceDurationSpec interface.
 */
export declare function instanceOfInfiniteOgrSourceDurationSpec(value: object): boolean;
export declare function InfiniteOgrSourceDurationSpecFromJSON(json: any): InfiniteOgrSourceDurationSpec;
export declare function InfiniteOgrSourceDurationSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): InfiniteOgrSourceDurationSpec;
export declare function InfiniteOgrSourceDurationSpecToJSON(value?: InfiniteOgrSourceDurationSpec | null): any;
