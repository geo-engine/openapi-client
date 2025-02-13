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
 * @interface ResourceIdMlModel
 */
export interface ResourceIdMlModel {
    /**
     *
     * @type {string}
     * @memberof ResourceIdMlModel
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ResourceIdMlModel
     */
    type: ResourceIdMlModelTypeEnum;
}
/**
 * @export
 */
export declare const ResourceIdMlModelTypeEnum: {
    readonly MlModel: "MlModel";
};
export type ResourceIdMlModelTypeEnum = typeof ResourceIdMlModelTypeEnum[keyof typeof ResourceIdMlModelTypeEnum];
/**
 * Check if a given object implements the ResourceIdMlModel interface.
 */
export declare function instanceOfResourceIdMlModel(value: object): value is ResourceIdMlModel;
export declare function ResourceIdMlModelFromJSON(json: any): ResourceIdMlModel;
export declare function ResourceIdMlModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceIdMlModel;
export declare function ResourceIdMlModelToJSON(json: any): ResourceIdMlModel;
export declare function ResourceIdMlModelToJSONTyped(value?: ResourceIdMlModel | null, ignoreDiscriminator?: boolean): any;
