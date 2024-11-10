/* tslint:disable */
/* eslint-disable */
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
import { ColorizerFromJSON, ColorizerToJSON, } from './Colorizer';
/**
 * @export
 */
export const SingleBandRasterColorizerTypeEnum = {
    SingleBand: 'singleBand',
    MultiBand: 'multiBand'
};
/**
 * Check if a given object implements the SingleBandRasterColorizer interface.
 */
export function instanceOfSingleBandRasterColorizer(value) {
    let isInstance = true;
    isInstance = isInstance && "band" in value;
    isInstance = isInstance && "bandColorizer" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function SingleBandRasterColorizerFromJSON(json) {
    return SingleBandRasterColorizerFromJSONTyped(json, false);
}
export function SingleBandRasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'band': json['band'],
        'bandColorizer': ColorizerFromJSON(json['bandColorizer']),
        'type': json['type'],
    };
}
export function SingleBandRasterColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'band': value.band,
        'bandColorizer': ColorizerToJSON(value.bandColorizer),
        'type': value.type,
    };
}
