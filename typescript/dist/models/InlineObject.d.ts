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
 * @interface InlineObject
 */
export interface InlineObject {
    /**
     *
     * @type {string}
     * @memberof InlineObject
     */
    url: string;
}
/**
 * Check if a given object implements the InlineObject interface.
 */
export declare function instanceOfInlineObject(value: object): value is InlineObject;
export declare function InlineObjectFromJSON(json: any): InlineObject;
export declare function InlineObjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineObject;
export declare function InlineObjectToJSON(json: any): InlineObject;
export declare function InlineObjectToJSONTyped(value?: InlineObject | null, ignoreDiscriminator?: boolean): any;
