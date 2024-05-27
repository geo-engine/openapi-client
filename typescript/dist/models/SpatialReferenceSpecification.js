"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpatialReferenceSpecificationToJSON = exports.SpatialReferenceSpecificationFromJSONTyped = exports.SpatialReferenceSpecificationFromJSON = exports.instanceOfSpatialReferenceSpecification = void 0;
const BoundingBox2D_1 = require("./BoundingBox2D");
const AxisOrder_1 = require("./AxisOrder");
/**
 * Check if a given object implements the SpatialReferenceSpecification interface.
 */
function instanceOfSpatialReferenceSpecification(value) {
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
exports.instanceOfSpatialReferenceSpecification = instanceOfSpatialReferenceSpecification;
function SpatialReferenceSpecificationFromJSON(json) {
    return SpatialReferenceSpecificationFromJSONTyped(json, false);
}
exports.SpatialReferenceSpecificationFromJSON = SpatialReferenceSpecificationFromJSON;
function SpatialReferenceSpecificationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'axisLabels': json['axisLabels'] == null ? undefined : json['axisLabels'],
        'axisOrder': json['axisOrder'] == null ? undefined : (0, AxisOrder_1.AxisOrderFromJSON)(json['axisOrder']),
        'extent': (0, BoundingBox2D_1.BoundingBox2DFromJSON)(json['extent']),
        'name': json['name'],
        'projString': json['projString'],
        'spatialReference': json['spatialReference'],
    };
}
exports.SpatialReferenceSpecificationFromJSONTyped = SpatialReferenceSpecificationFromJSONTyped;
function SpatialReferenceSpecificationToJSON(value) {
    if (value == null) {
        return value;
    }
    return {
        'axisLabels': value['axisLabels'],
        'axisOrder': (0, AxisOrder_1.AxisOrderToJSON)(value['axisOrder']),
        'extent': (0, BoundingBox2D_1.BoundingBox2DToJSON)(value['extent']),
        'name': value['name'],
        'projString': value['projString'],
        'spatialReference': value['spatialReference'],
    };
}
exports.SpatialReferenceSpecificationToJSON = SpatialReferenceSpecificationToJSON;
