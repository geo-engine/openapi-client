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
 *
 * @export
 */
export const ProjectUpdateToken = {
    None: 'none',
    Delete: 'delete'
};
export function ProjectUpdateTokenFromJSON(json) {
    return ProjectUpdateTokenFromJSONTyped(json, false);
}
export function ProjectUpdateTokenFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
export function instanceOfProjectUpdateToken(value) {
    return value === ProjectUpdateToken.None || value === ProjectUpdateToken.Delete;
}
export function ProjectUpdateTokenToJSON(value) {
    return value;
}
