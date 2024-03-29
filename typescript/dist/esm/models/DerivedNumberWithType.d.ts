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
 * @interface DerivedNumberWithType
 */
export interface DerivedNumberWithType {
    /**
     *
     * @type {string}
     * @memberof DerivedNumberWithType
     */
    attribute: string;
    /**
     *
     * @type {number}
     * @memberof DerivedNumberWithType
     */
    defaultValue: number;
    /**
     *
     * @type {number}
     * @memberof DerivedNumberWithType
     */
    factor: number;
    /**
     *
     * @type {string}
     * @memberof DerivedNumberWithType
     */
    type: DerivedNumberWithTypeTypeEnum;
}
/**
 * @export
 */
export declare const DerivedNumberWithTypeTypeEnum: {
    readonly Derived: "derived";
};
export type DerivedNumberWithTypeTypeEnum = typeof DerivedNumberWithTypeTypeEnum[keyof typeof DerivedNumberWithTypeTypeEnum];
/**
 * Check if a given object implements the DerivedNumberWithType interface.
 */
export declare function instanceOfDerivedNumberWithType(value: object): boolean;
export declare function DerivedNumberWithTypeFromJSON(json: any): DerivedNumberWithType;
export declare function DerivedNumberWithTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DerivedNumberWithType;
export declare function DerivedNumberWithTypeToJSON(value?: DerivedNumberWithType | null): any;
