/* tslint:disable */
/* eslint-disable */
/**
 * Geo Engine Pro API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.7.0
 * Contact: dev@geoengine.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Check if a given object implements the AuthCodeResponse interface.
 */
export function instanceOfAuthCodeResponse(value) {
    let isInstance = true;
    isInstance = isInstance && "code" in value;
    isInstance = isInstance && "sessionState" in value;
    isInstance = isInstance && "state" in value;
    return isInstance;
}
export function AuthCodeResponseFromJSON(json) {
    return AuthCodeResponseFromJSONTyped(json, false);
}
export function AuthCodeResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': json['code'],
        'sessionState': json['sessionState'],
        'state': json['state'],
    };
}
export function AuthCodeResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'sessionState': value.sessionState,
        'state': value.state,
    };
}
