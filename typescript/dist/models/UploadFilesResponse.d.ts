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
 * @interface UploadFilesResponse
 */
export interface UploadFilesResponse {
    /**
     *
     * @type {Array<string>}
     * @memberof UploadFilesResponse
     */
    files: Array<string>;
}
/**
 * Check if a given object implements the UploadFilesResponse interface.
 */
export declare function instanceOfUploadFilesResponse(value: object): value is UploadFilesResponse;
export declare function UploadFilesResponseFromJSON(json: any): UploadFilesResponse;
export declare function UploadFilesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UploadFilesResponse;
export declare function UploadFilesResponseToJSON(json: any): UploadFilesResponse;
export declare function UploadFilesResponseToJSONTyped(value?: UploadFilesResponse | null, ignoreDiscriminator?: boolean): any;
