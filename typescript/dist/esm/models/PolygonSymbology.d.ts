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
import type { ColorParam } from './ColorParam';
import type { StrokeParam } from './StrokeParam';
import type { TextSymbology } from './TextSymbology';
/**
 *
 * @export
 * @interface PolygonSymbology
 */
export interface PolygonSymbology {
    /**
     *
     * @type {boolean}
     * @memberof PolygonSymbology
     */
    autoSimplified: boolean;
    /**
     *
     * @type {ColorParam}
     * @memberof PolygonSymbology
     */
    fillColor: ColorParam;
    /**
     *
     * @type {StrokeParam}
     * @memberof PolygonSymbology
     */
    stroke: StrokeParam;
    /**
     *
     * @type {TextSymbology}
     * @memberof PolygonSymbology
     */
    text?: TextSymbology | null;
    /**
     *
     * @type {string}
     * @memberof PolygonSymbology
     */
    type: PolygonSymbologyTypeEnum;
}
/**
 * @export
 */
export declare const PolygonSymbologyTypeEnum: {
    readonly Polygon: "polygon";
};
export type PolygonSymbologyTypeEnum = typeof PolygonSymbologyTypeEnum[keyof typeof PolygonSymbologyTypeEnum];
/**
 * Check if a given object implements the PolygonSymbology interface.
 */
export declare function instanceOfPolygonSymbology(value: object): boolean;
export declare function PolygonSymbologyFromJSON(json: any): PolygonSymbology;
export declare function PolygonSymbologyFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolygonSymbology;
export declare function PolygonSymbologyToJSON(value?: PolygonSymbology | null): any;
