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
 * @export
 */
export const PaletteColorizerTypeEnum = {
    Palette: 'palette'
};
/**
 * Check if a given object implements the PaletteColorizer interface.
 */
export function instanceOfPaletteColorizer(value) {
    let isInstance = true;
    isInstance = isInstance && "colors" in value;
    isInstance = isInstance && "defaultColor" in value;
    isInstance = isInstance && "noDataColor" in value;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
export function PaletteColorizerFromJSON(json) {
    return PaletteColorizerFromJSONTyped(json, false);
}
export function PaletteColorizerFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'colors': json['colors'],
        'defaultColor': json['defaultColor'],
        'noDataColor': json['noDataColor'],
        'type': json['type'],
    };
}
export function PaletteColorizerToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'colors': value.colors,
        'defaultColor': value.defaultColor,
        'noDataColor': value.noDataColor,
        'type': value.type,
    };
}
