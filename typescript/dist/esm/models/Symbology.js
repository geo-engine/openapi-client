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
import { LineSymbologyFromJSONTyped, LineSymbologyToJSON, } from './LineSymbology';
import { PointSymbologyFromJSONTyped, PointSymbologyToJSON, } from './PointSymbology';
import { PolygonSymbologyFromJSONTyped, PolygonSymbologyToJSON, } from './PolygonSymbology';
import { RasterSymbologyFromJSONTyped, RasterSymbologyToJSON, } from './RasterSymbology';
export function SymbologyFromJSON(json) {
    return SymbologyFromJSONTyped(json, false);
}
export function SymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['type']) {
        case 'line':
            return Object.assign(Object.assign({}, LineSymbologyFromJSONTyped(json, true)), { type: 'line' });
        case 'point':
            return Object.assign(Object.assign({}, PointSymbologyFromJSONTyped(json, true)), { type: 'point' });
        case 'polygon':
            return Object.assign(Object.assign({}, PolygonSymbologyFromJSONTyped(json, true)), { type: 'polygon' });
        case 'raster':
            return Object.assign(Object.assign({}, RasterSymbologyFromJSONTyped(json, true)), { type: 'raster' });
        default:
            throw new Error(`No variant of Symbology exists with 'type=${json['type']}'`);
    }
}
export function SymbologyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['type']) {
        case 'line':
            return LineSymbologyToJSON(value);
        case 'point':
            return PointSymbologyToJSON(value);
        case 'polygon':
            return PolygonSymbologyToJSON(value);
        case 'raster':
            return RasterSymbologyToJSON(value);
        default:
            throw new Error(`No variant of Symbology exists with 'type=${value['type']}'`);
    }
}
