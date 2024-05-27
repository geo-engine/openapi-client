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
 * @interface CreateDatasetHandler200Response
 */
export interface CreateDatasetHandler200Response {
    /**
     *
     * @type {string}
     * @memberof CreateDatasetHandler200Response
     */
    datasetName: string;
}
/**
 * Check if a given object implements the CreateDatasetHandler200Response interface.
 */
export declare function instanceOfCreateDatasetHandler200Response(value: object): value is CreateDatasetHandler200Response;
export declare function CreateDatasetHandler200ResponseFromJSON(json: any): CreateDatasetHandler200Response;
export declare function CreateDatasetHandler200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateDatasetHandler200Response;
export declare function CreateDatasetHandler200ResponseToJSON(value?: CreateDatasetHandler200Response | null): any;
