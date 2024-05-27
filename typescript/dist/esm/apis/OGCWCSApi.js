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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as runtime from '../runtime';
/**
 *
 */
export class OGCWCSApi extends runtime.BaseAPI {
    /**
     * Get WCS Capabilities
     * Get WCS Capabilities
     */
    wcsCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wcsCapabilitiesHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wcsCapabilitiesHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wcsCapabilitiesHandler().');
            }
            const queryParameters = {};
            if (requestParameters['version'] != null) {
                queryParameters['version'] = requestParameters['version'];
            }
            if (requestParameters['service'] != null) {
                queryParameters['service'] = requestParameters['service'];
            }
            if (requestParameters['request'] != null) {
                queryParameters['request'] = requestParameters['request'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wcs/{workflow}?request=GetCapabilities`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Get WCS Capabilities
     * Get WCS Capabilities
     */
    wcsCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Coverage Description
     * Get WCS Coverage Description
     */
    wcsDescribeCoverageHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wcsDescribeCoverageHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wcsDescribeCoverageHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wcsDescribeCoverageHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wcsDescribeCoverageHandler().');
            }
            if (requestParameters['identifiers'] == null) {
                throw new runtime.RequiredError('identifiers', 'Required parameter "identifiers" was null or undefined when calling wcsDescribeCoverageHandler().');
            }
            const queryParameters = {};
            if (requestParameters['version'] != null) {
                queryParameters['version'] = requestParameters['version'];
            }
            if (requestParameters['service'] != null) {
                queryParameters['service'] = requestParameters['service'];
            }
            if (requestParameters['request'] != null) {
                queryParameters['request'] = requestParameters['request'];
            }
            if (requestParameters['identifiers'] != null) {
                queryParameters['identifiers'] = requestParameters['identifiers'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wcs/{workflow}?request=DescribeCoverage`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            if (this.isJsonMime(response.headers.get('content-type'))) {
                return new runtime.JSONApiResponse(response);
            }
            else {
                return new runtime.TextApiResponse(response);
            }
        });
    }
    /**
     * Get WCS Coverage Description
     * Get WCS Coverage Description
     */
    wcsDescribeCoverageHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsDescribeCoverageHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Coverage
     * Get WCS Coverage
     */
    wcsGetCoverageHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['format'] == null) {
                throw new runtime.RequiredError('format', 'Required parameter "format" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['identifier'] == null) {
                throw new runtime.RequiredError('identifier', 'Required parameter "identifier" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['boundingbox'] == null) {
                throw new runtime.RequiredError('boundingbox', 'Required parameter "boundingbox" was null or undefined when calling wcsGetCoverageHandler().');
            }
            if (requestParameters['gridbasecrs'] == null) {
                throw new runtime.RequiredError('gridbasecrs', 'Required parameter "gridbasecrs" was null or undefined when calling wcsGetCoverageHandler().');
            }
            const queryParameters = {};
            if (requestParameters['version'] != null) {
                queryParameters['version'] = requestParameters['version'];
            }
            if (requestParameters['service'] != null) {
                queryParameters['service'] = requestParameters['service'];
            }
            if (requestParameters['request'] != null) {
                queryParameters['request'] = requestParameters['request'];
            }
            if (requestParameters['format'] != null) {
                queryParameters['format'] = requestParameters['format'];
            }
            if (requestParameters['identifier'] != null) {
                queryParameters['identifier'] = requestParameters['identifier'];
            }
            if (requestParameters['boundingbox'] != null) {
                queryParameters['boundingbox'] = requestParameters['boundingbox'];
            }
            if (requestParameters['gridbasecrs'] != null) {
                queryParameters['gridbasecrs'] = requestParameters['gridbasecrs'];
            }
            if (requestParameters['gridorigin'] != null) {
                queryParameters['gridorigin'] = requestParameters['gridorigin'];
            }
            if (requestParameters['gridoffsets'] != null) {
                queryParameters['gridoffsets'] = requestParameters['gridoffsets'];
            }
            if (requestParameters['time'] != null) {
                queryParameters['time'] = requestParameters['time'];
            }
            if (requestParameters['resx'] != null) {
                queryParameters['resx'] = requestParameters['resx'];
            }
            if (requestParameters['resy'] != null) {
                queryParameters['resy'] = requestParameters['resy'];
            }
            if (requestParameters['nodatavalue'] != null) {
                queryParameters['nodatavalue'] = requestParameters['nodatavalue'];
            }
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wcs/{workflow}?request=GetCoverage`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.BlobApiResponse(response);
        });
    }
    /**
     * Get WCS Coverage
     * Get WCS Coverage
     */
    wcsGetCoverageHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsGetCoverageHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
