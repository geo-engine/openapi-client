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
 * @interface ProjectVersion
 */
export interface ProjectVersion {
    /**
     *
     * @type {Date}
     * @memberof ProjectVersion
     */
    changed: Date;
    /**
     *
     * @type {string}
     * @memberof ProjectVersion
     */
    id: string;
}
/**
 * Check if a given object implements the ProjectVersion interface.
 */
export declare function instanceOfProjectVersion(value: object): boolean;
export declare function ProjectVersionFromJSON(json: any): ProjectVersion;
export declare function ProjectVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectVersion;
export declare function ProjectVersionToJSON(value?: ProjectVersion | null): any;
