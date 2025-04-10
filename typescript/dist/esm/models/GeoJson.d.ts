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
import type { CollectionType } from './CollectionType';
/**
 *
 * @export
 * @interface GeoJson
 */
export interface GeoJson {
    /**
     *
     * @type {Array<any>}
     * @memberof GeoJson
     */
    features: Array<any>;
    /**
     *
     * @type {CollectionType}
     * @memberof GeoJson
     */
    type: CollectionType;
}
/**
 * Check if a given object implements the GeoJson interface.
 */
export declare function instanceOfGeoJson(value: object): value is GeoJson;
export declare function GeoJsonFromJSON(json: any): GeoJson;
export declare function GeoJsonFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoJson;
export declare function GeoJsonToJSON(json: any): GeoJson;
export declare function GeoJsonToJSONTyped(value?: GeoJson | null, ignoreDiscriminator?: boolean): any;
