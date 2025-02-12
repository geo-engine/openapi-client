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
 * @interface ResourceIdProject
 */
export interface ResourceIdProject {
    /**
     *
     * @type {string}
     * @memberof ResourceIdProject
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceIdProject
     */
    type: ResourceIdProjectTypeEnum;
}
/**
 * @export
 */
export declare const ResourceIdProjectTypeEnum: {
    readonly Project: "Project";
};
export type ResourceIdProjectTypeEnum = typeof ResourceIdProjectTypeEnum[keyof typeof ResourceIdProjectTypeEnum];
/**
 * Check if a given object implements the ResourceIdProject interface.
 */
export declare function instanceOfResourceIdProject(value: object): value is ResourceIdProject;
export declare function ResourceIdProjectFromJSON(json: any): ResourceIdProject;
export declare function ResourceIdProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdProject;
export declare function ResourceIdProjectToJSON(json: any): ResourceIdProject;
export declare function ResourceIdProjectToJSONTyped(value?: ResourceIdProject | null, ignoreDiscriminator?: boolean): any;
