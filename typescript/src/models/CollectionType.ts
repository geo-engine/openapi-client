/* tslint:disable */
/* eslint-disable */
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
 */
export const CollectionType = {
    FeatureCollection: 'FeatureCollection'
} as const;
export type CollectionType = typeof CollectionType[keyof typeof CollectionType];


export function CollectionTypeFromJSON(json: any): CollectionType {
    return CollectionTypeFromJSONTyped(json, false);
}

export function CollectionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CollectionType {
    return json as CollectionType;
}

export function CollectionTypeToJSON(value?: CollectionType | null): any {
    return value as any;
}

