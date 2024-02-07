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
const runtime_1 = require("../runtime");
const AxisOrder_1 = require("./AxisOrder");
const BoundingBox2D_1 = require("./BoundingBox2D");
/**
 * Check if a given object implements the SpatialReferenceSpecification interface.
 */
function instanceOfSpatialReferenceSpecification(value) {
    let isInstance = true;
    isInstance = isInstance && "extent" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "projString" in value;
    isInstance = isInstance && "spatialReference" in value;
    return isInstance;
}
exports.instanceOfSpatialReferenceSpecification = instanceOfSpatialReferenceSpecification;
function SpatialReferenceSpecificationFromJSON(json) {
    return SpatialReferenceSpecificationFromJSONTyped(json, false);
}
exports.SpatialReferenceSpecificationFromJSON = SpatialReferenceSpecificationFromJSON;
function SpatialReferenceSpecificationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'axisLabels': !(0, runtime_1.exists)(json, 'axisLabels') ? undefined : json['axisLabels'],
        'axisOrder': !(0, runtime_1.exists)(json, 'axisOrder') ? undefined : (0, AxisOrder_1.AxisOrderFromJSON)(json['axisOrder']),
        'extent': (0, BoundingBox2D_1.BoundingBox2DFromJSON)(json['extent']),
        'name': json['name'],
        'projString': json['projString'],
        'spatialReference': json['spatialReference'],
    };
}
exports.SpatialReferenceSpecificationFromJSONTyped = SpatialReferenceSpecificationFromJSONTyped;
function SpatialReferenceSpecificationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'axisLabels': value.axisLabels,
        'axisOrder': (0, AxisOrder_1.AxisOrderToJSON)(value.axisOrder),
        'extent': (0, BoundingBox2D_1.BoundingBox2DToJSON)(value.extent),
        'name': value.name,
        'projString': value.projString,
        'spatialReference': value.spatialReference,
    };
}
exports.SpatialReferenceSpecificationToJSON = SpatialReferenceSpecificationToJSON;
