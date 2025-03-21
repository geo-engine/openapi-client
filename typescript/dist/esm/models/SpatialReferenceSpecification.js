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
import { BoundingBox2DFromJSON, BoundingBox2DToJSON, } from './BoundingBox2D';
import { AxisOrderFromJSON, AxisOrderToJSON, } from './AxisOrder';
/**
 * Check if a given object implements the SpatialReferenceSpecification interface.
 */
export function instanceOfSpatialReferenceSpecification(value) {
    if (!('extent' in value) || value['extent'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('projString' in value) || value['projString'] === undefined)
        return false;
    if (!('spatialReference' in value) || value['spatialReference'] === undefined)
        return false;
    return true;
}
export function SpatialReferenceSpecificationFromJSON(json) {
    return SpatialReferenceSpecificationFromJSONTyped(json, false);
}
export function SpatialReferenceSpecificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'axisLabels': json['axisLabels'] == null ? undefined : json['axisLabels'],
        'axisOrder': json['axisOrder'] == null ? undefined : AxisOrderFromJSON(json['axisOrder']),
        'extent': BoundingBox2DFromJSON(json['extent']),
        'name': json['name'],
        'projString': json['projString'],
        'spatialReference': json['spatialReference'],
    };
}
export function SpatialReferenceSpecificationToJSON(json) {
    return SpatialReferenceSpecificationToJSONTyped(json, false);
}
export function SpatialReferenceSpecificationToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'axisLabels': value['axisLabels'],
        'axisOrder': AxisOrderToJSON(value['axisOrder']),
        'extent': BoundingBox2DToJSON(value['extent']),
        'name': value['name'],
        'projString': value['projString'],
        'spatialReference': value['spatialReference'],
    };
}
