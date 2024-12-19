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
import { OgrSourceTimeFormatAutoFromJSONTyped, OgrSourceTimeFormatAutoToJSON, } from './OgrSourceTimeFormatAuto';
import { OgrSourceTimeFormatCustomFromJSONTyped, OgrSourceTimeFormatCustomToJSON, } from './OgrSourceTimeFormatCustom';
import { OgrSourceTimeFormatUnixTimeStampFromJSONTyped, OgrSourceTimeFormatUnixTimeStampToJSON, } from './OgrSourceTimeFormatUnixTimeStamp';
export function OgrSourceTimeFormatFromJSON(json) {
    return OgrSourceTimeFormatFromJSONTyped(json, false);
}
export function OgrSourceTimeFormatFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['format']) {
        case 'auto':
            return Object.assign(Object.assign({}, OgrSourceTimeFormatAutoFromJSONTyped(json, true)), { format: 'auto' });
        case 'custom':
            return Object.assign(Object.assign({}, OgrSourceTimeFormatCustomFromJSONTyped(json, true)), { format: 'custom' });
        case 'unixTimeStamp':
            return Object.assign(Object.assign({}, OgrSourceTimeFormatUnixTimeStampFromJSONTyped(json, true)), { format: 'unixTimeStamp' });
        default:
            throw new Error(`No variant of OgrSourceTimeFormat exists with 'format=${json['format']}'`);
    }
}
export function OgrSourceTimeFormatToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['format']) {
        case 'auto':
            return OgrSourceTimeFormatAutoToJSON(value);
        case 'custom':
            return OgrSourceTimeFormatCustomToJSON(value);
        case 'unixTimeStamp':
            return OgrSourceTimeFormatUnixTimeStampToJSON(value);
        default:
            throw new Error(`No variant of OgrSourceTimeFormat exists with 'format=${value['format']}'`);
    }
}
