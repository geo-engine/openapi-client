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

import {
    MultiBandRasterColorizer,
    instanceOfMultiBandRasterColorizer,
    MultiBandRasterColorizerFromJSON,
    MultiBandRasterColorizerFromJSONTyped,
    MultiBandRasterColorizerToJSON,
} from './MultiBandRasterColorizer';
import {
    SingleBandRasterColorizer,
    instanceOfSingleBandRasterColorizer,
    SingleBandRasterColorizerFromJSON,
    SingleBandRasterColorizerFromJSONTyped,
    SingleBandRasterColorizerToJSON,
} from './SingleBandRasterColorizer';

/**
 * @type RasterColorizer
 * 
 * @export
 */
export type RasterColorizer = { type: 'multiBand' } & MultiBandRasterColorizer | { type: 'singleBand' } & SingleBandRasterColorizer;

export function RasterColorizerFromJSON(json: any): RasterColorizer {
    return RasterColorizerFromJSONTyped(json, false);
}

export function RasterColorizerFromJSONTyped(json: any, ignoreDiscriminator: boolean): RasterColorizer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'multiBand':
            return {...MultiBandRasterColorizerFromJSONTyped(json, true), type: 'multiBand'};
        case 'singleBand':
            return {...SingleBandRasterColorizerFromJSONTyped(json, true), type: 'singleBand'};
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${json['type']}'`);
    }
}

export function RasterColorizerToJSON(value?: RasterColorizer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'multiBand':
            return MultiBandRasterColorizerToJSON(value);
        case 'singleBand':
            return SingleBandRasterColorizerToJSON(value);
        default:
            throw new Error(`No variant of RasterColorizer exists with 'type=${value['type']}'`);
    }

}

