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
 */
export declare const ProjectUpdateToken: {
    readonly None: "none";
    readonly Delete: "delete";
};
export type ProjectUpdateToken = typeof ProjectUpdateToken[keyof typeof ProjectUpdateToken];
export declare function instanceOfProjectUpdateToken(value: any): boolean;
export declare function ProjectUpdateTokenFromJSON(json: any): ProjectUpdateToken;
export declare function ProjectUpdateTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectUpdateToken;
export declare function ProjectUpdateTokenToJSON(value?: ProjectUpdateToken | null): any;
