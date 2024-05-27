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
 * @interface AuthCodeRequestURL
 */
export interface AuthCodeRequestURL {
    /**
     *
     * @type {string}
     * @memberof AuthCodeRequestURL
     */
    url: string;
}
/**
 * Check if a given object implements the AuthCodeRequestURL interface.
 */
export declare function instanceOfAuthCodeRequestURL(value: object): value is AuthCodeRequestURL;
export declare function AuthCodeRequestURLFromJSON(json: any): AuthCodeRequestURL;
export declare function AuthCodeRequestURLFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthCodeRequestURL;
export declare function AuthCodeRequestURLToJSON(value?: AuthCodeRequestURL | null): any;
