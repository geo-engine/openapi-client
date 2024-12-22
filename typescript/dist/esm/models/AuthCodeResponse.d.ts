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
 * @interface AuthCodeResponse
 */
export interface AuthCodeResponse {
    /**
     *
     * @type {string}
     * @memberof AuthCodeResponse
     */
    code: string;
    /**
     *
     * @type {string}
     * @memberof AuthCodeResponse
     */
    sessionState: string;
    /**
     *
     * @type {string}
     * @memberof AuthCodeResponse
     */
    state: string;
}
/**
 * Check if a given object implements the AuthCodeResponse interface.
 */
export declare function instanceOfAuthCodeResponse(value: object): boolean;
export declare function AuthCodeResponseFromJSON(json: any): AuthCodeResponse;
export declare function AuthCodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthCodeResponse;
export declare function AuthCodeResponseToJSON(value?: AuthCodeResponse | null): any;
