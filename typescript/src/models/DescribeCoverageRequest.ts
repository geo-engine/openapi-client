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
export const DescribeCoverageRequest = {
    DescribeCoverage: 'DescribeCoverage'
} as const;
export type DescribeCoverageRequest = typeof DescribeCoverageRequest[keyof typeof DescribeCoverageRequest];


export function instanceOfDescribeCoverageRequest(value: any): boolean {
    for (const key in DescribeCoverageRequest) {
        if (Object.prototype.hasOwnProperty.call(DescribeCoverageRequest, key)) {
            if (DescribeCoverageRequest[key as keyof typeof DescribeCoverageRequest] === value) {
                return true;
            }
        }
    }
    return false;
}

export function DescribeCoverageRequestFromJSON(json: any): DescribeCoverageRequest {
    return DescribeCoverageRequestFromJSONTyped(json, false);
}

export function DescribeCoverageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): DescribeCoverageRequest {
    return json as DescribeCoverageRequest;
}

export function DescribeCoverageRequestToJSON(value?: DescribeCoverageRequest | null): any {
    return value as any;
}

export function DescribeCoverageRequestToJSONTyped(value: any, ignoreDiscriminator: boolean): DescribeCoverageRequest {
    return value as DescribeCoverageRequest;
}

