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
 * @interface StaticColorParam
 */
export interface StaticColorParam {
    /**
     *
     * @type {Array<number>}
     * @memberof StaticColorParam
     */
    color: Array<number>;
    /**
     *
     * @type {string}
     * @memberof StaticColorParam
     */
    type: StaticColorParamTypeEnum;
}
/**
 * @export
 */
export declare const StaticColorParamTypeEnum: {
    readonly Static: "static";
    readonly Derived: "derived";
};
export type StaticColorParamTypeEnum = typeof StaticColorParamTypeEnum[keyof typeof StaticColorParamTypeEnum];
/**
 * Check if a given object implements the StaticColorParam interface.
 */
export declare function instanceOfStaticColorParam(value: object): boolean;
export declare function StaticColorParamFromJSON(json: any): StaticColorParam;
export declare function StaticColorParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): StaticColorParam;
export declare function StaticColorParamToJSON(value?: StaticColorParam | null): any;
