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


/**
 * 
 * @export
 */
export const ProjectUpdateToken = {
    None: 'none',
    Delete: 'delete'
} as const;
export type ProjectUpdateToken = typeof ProjectUpdateToken[keyof typeof ProjectUpdateToken];


export function instanceOfProjectUpdateToken(value: any): boolean {
    for (const key in ProjectUpdateToken) {
        if (Object.prototype.hasOwnProperty.call(ProjectUpdateToken, key)) {
            if (ProjectUpdateToken[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function ProjectUpdateTokenFromJSON(json: any): ProjectUpdateToken {
    return ProjectUpdateTokenFromJSONTyped(json, false);
}

export function ProjectUpdateTokenFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectUpdateToken {
    return json as ProjectUpdateToken;
}

export function ProjectUpdateTokenToJSON(value?: ProjectUpdateToken | null): any {
    return value as any;
}

