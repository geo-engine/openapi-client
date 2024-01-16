/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface TaskAbortOptions
 */
export interface TaskAbortOptions {
    /**
     *
     * @type {boolean}
     * @memberof TaskAbortOptions
     */
    force?: boolean;
}
/**
 * Check if a given object implements the TaskAbortOptions interface.
 */
export declare function instanceOfTaskAbortOptions(value: object): boolean;
export declare function TaskAbortOptionsFromJSON(json: any): TaskAbortOptions;
export declare function TaskAbortOptionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskAbortOptions;
export declare function TaskAbortOptionsToJSON(value?: TaskAbortOptions | null): any;
