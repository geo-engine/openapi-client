"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiBandRasterColorizerToJSON = exports.MultiBandRasterColorizerFromJSONTyped = exports.MultiBandRasterColorizerFromJSON = exports.instanceOfMultiBandRasterColorizer = exports.MultiBandRasterColorizerTypeEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.MultiBandRasterColorizerTypeEnum = {
    MultiBand: 'multiBand'
};
/**
 * Check if a given object implements the MultiBandRasterColorizer interface.
 */
function instanceOfMultiBandRasterColorizer(value) {
    let isInstance = true;
    isInstance = isInstance && "blueBand" in value;
    isInstance = isInstance && "blueMax" in value;
    isInstance = isInstance && "blueMin" in value;
    isInstance = isInstance && "greenBand" in value;
    isInstance = isInstance && "greenMax" in value;
    isInstance = isInstance && "greenMin" in value;
    isInstance = isInstance && "redBand" in value;
    isInstance = isInstance && "redMax" in value;
    isInstance = isInstance && "redMin" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfMultiBandRasterColorizer = instanceOfMultiBandRasterColorizer;
function MultiBandRasterColorizerFromJSON(json) {
    return MultiBandRasterColorizerFromJSONTyped(json, false);
}
exports.MultiBandRasterColorizerFromJSON = MultiBandRasterColorizerFromJSON;
function MultiBandRasterColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blueBand': json['blueBand'],
        'blueMax': json['blueMax'],
        'blueMin': json['blueMin'],
        'blueScale': !(0, runtime_1.exists)(json, 'blueScale') ? undefined : json['blueScale'],
        'greenBand': json['greenBand'],
        'greenMax': json['greenMax'],
        'greenMin': json['greenMin'],
        'greenScale': !(0, runtime_1.exists)(json, 'greenScale') ? undefined : json['greenScale'],
        'noDataColor': !(0, runtime_1.exists)(json, 'noDataColor') ? undefined : json['noDataColor'],
        'redBand': json['redBand'],
        'redMax': json['redMax'],
        'redMin': json['redMin'],
        'redScale': !(0, runtime_1.exists)(json, 'redScale') ? undefined : json['redScale'],
        'type': json['type'],
    };
}
exports.MultiBandRasterColorizerFromJSONTyped = MultiBandRasterColorizerFromJSONTyped;
function MultiBandRasterColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blueBand': value.blueBand,
        'blueMax': value.blueMax,
        'blueMin': value.blueMin,
        'blueScale': value.blueScale,
        'greenBand': value.greenBand,
        'greenMax': value.greenMax,
        'greenMin': value.greenMin,
        'greenScale': value.greenScale,
        'noDataColor': value.noDataColor,
        'redBand': value.redBand,
        'redMax': value.redMax,
        'redMin': value.redMin,
        'redScale': value.redScale,
        'type': value.type,
    };
}
exports.MultiBandRasterColorizerToJSON = MultiBandRasterColorizerToJSON;
