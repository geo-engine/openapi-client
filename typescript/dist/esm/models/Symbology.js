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
import { SymbologyLineFromJSONTyped, SymbologyLineToJSON, } from './SymbologyLine';
import { SymbologyPointFromJSONTyped, SymbologyPointToJSON, } from './SymbologyPoint';
import { SymbologyPolygonFromJSONTyped, SymbologyPolygonToJSON, } from './SymbologyPolygon';
import { SymbologyRasterFromJSONTyped, SymbologyRasterToJSON, } from './SymbologyRaster';
export function SymbologyFromJSON(json) {
    return SymbologyFromJSONTyped(json, false);
}
export function SymbologyFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    switch (json['type']) {
        case 'line':
            return Object.assign(Object.assign({}, SymbologyLineFromJSONTyped(json, true)), { type: 'line' });
        case 'point':
            return Object.assign(Object.assign({}, SymbologyPointFromJSONTyped(json, true)), { type: 'point' });
        case 'polygon':
            return Object.assign(Object.assign({}, SymbologyPolygonFromJSONTyped(json, true)), { type: 'polygon' });
        case 'raster':
            return Object.assign(Object.assign({}, SymbologyRasterFromJSONTyped(json, true)), { type: 'raster' });
        default:
            throw new Error(`No variant of Symbology exists with 'type=${json['type']}'`);
    }
}
export function SymbologyToJSON(value) {
    if (value == null) {
        return value;
    }
    switch (value['type']) {
        case 'line':
            return SymbologyLineToJSON(value);
        case 'point':
            return SymbologyPointToJSON(value);
        case 'polygon':
            return SymbologyPolygonToJSON(value);
        case 'raster':
            return SymbologyRasterToJSON(value);
        default:
            throw new Error(`No variant of Symbology exists with 'type=${value['type']}'`);
    }
}
