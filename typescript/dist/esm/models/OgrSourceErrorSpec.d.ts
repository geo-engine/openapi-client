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
 */
export declare const OgrSourceErrorSpec: {
    readonly Ignore: "ignore";
    readonly Abort: "abort";
};
export type OgrSourceErrorSpec = typeof OgrSourceErrorSpec[keyof typeof OgrSourceErrorSpec];
export declare function instanceOfOgrSourceErrorSpec(value: any): boolean;
export declare function OgrSourceErrorSpecFromJSON(json: any): OgrSourceErrorSpec;
export declare function OgrSourceErrorSpecFromJSONTyped(json: any, ignoreDiscriminator: boolean): OgrSourceErrorSpec;
export declare function OgrSourceErrorSpecToJSON(value?: OgrSourceErrorSpec | null): any;
export declare function OgrSourceErrorSpecToJSONTyped(value: any, ignoreDiscriminator: boolean): OgrSourceErrorSpec;
