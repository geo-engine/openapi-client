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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OGCWCSApi = void 0;
const runtime = require("../runtime");
/**
 *
 */
class OGCWCSApi extends runtime.BaseAPI {
    /**
     * Get WCS Capabilities
     */
    wcsCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.workflow === null || requestParameters.workflow === undefined) {
                throw new runtime.RequiredError('workflow', 'Required parameter requestParameters.workflow was null or undefined when calling wcsCapabilitiesHandler.');
            }
            if (requestParameters.service === null || requestParameters.service === undefined) {
                throw new runtime.RequiredError('service', 'Required parameter requestParameters.service was null or undefined when calling wcsCapabilitiesHandler.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling wcsCapabilitiesHandler.');
            }
            const queryParameters = {};
            if (requestParameters.version !== undefined) {
                queryParameters['version'] = requestParameters.version;
            }
            if (requestParameters.service !== undefined) {
                queryParameters['service'] = requestParameters.service;
            }
            if (requestParameters.request !== undefined) {
                queryParameters['request'] = requestParameters.request;
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
                path: `/wcs/{workflow}?request=GetCapabilities`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters.workflow))),
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
     */
    wcsCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Coverage Description
     */
    wcsDescribeCoverageHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.workflow === null || requestParameters.workflow === undefined) {
                throw new runtime.RequiredError('workflow', 'Required parameter requestParameters.workflow was null or undefined when calling wcsDescribeCoverageHandler.');
            }
            if (requestParameters.version === null || requestParameters.version === undefined) {
                throw new runtime.RequiredError('version', 'Required parameter requestParameters.version was null or undefined when calling wcsDescribeCoverageHandler.');
            }
            if (requestParameters.service === null || requestParameters.service === undefined) {
                throw new runtime.RequiredError('service', 'Required parameter requestParameters.service was null or undefined when calling wcsDescribeCoverageHandler.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling wcsDescribeCoverageHandler.');
            }
            if (requestParameters.identifiers === null || requestParameters.identifiers === undefined) {
                throw new runtime.RequiredError('identifiers', 'Required parameter requestParameters.identifiers was null or undefined when calling wcsDescribeCoverageHandler.');
            }
            const queryParameters = {};
            if (requestParameters.version !== undefined) {
                queryParameters['version'] = requestParameters.version;
            }
            if (requestParameters.service !== undefined) {
                queryParameters['service'] = requestParameters.service;
            }
            if (requestParameters.request !== undefined) {
                queryParameters['request'] = requestParameters.request;
            }
            if (requestParameters.identifiers !== undefined) {
                queryParameters['identifiers'] = requestParameters.identifiers;
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
                path: `/wcs/{workflow}?request=DescribeCoverage`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters.workflow))),
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
     */
    wcsDescribeCoverageHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsDescribeCoverageHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WCS Coverage
     */
    wcsGetCoverageHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.workflow === null || requestParameters.workflow === undefined) {
                throw new runtime.RequiredError('workflow', 'Required parameter requestParameters.workflow was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.version === null || requestParameters.version === undefined) {
                throw new runtime.RequiredError('version', 'Required parameter requestParameters.version was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.service === null || requestParameters.service === undefined) {
                throw new runtime.RequiredError('service', 'Required parameter requestParameters.service was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.request === null || requestParameters.request === undefined) {
                throw new runtime.RequiredError('request', 'Required parameter requestParameters.request was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.format === null || requestParameters.format === undefined) {
                throw new runtime.RequiredError('format', 'Required parameter requestParameters.format was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.identifier === null || requestParameters.identifier === undefined) {
                throw new runtime.RequiredError('identifier', 'Required parameter requestParameters.identifier was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.boundingbox === null || requestParameters.boundingbox === undefined) {
                throw new runtime.RequiredError('boundingbox', 'Required parameter requestParameters.boundingbox was null or undefined when calling wcsGetCoverageHandler.');
            }
            if (requestParameters.gridbasecrs === null || requestParameters.gridbasecrs === undefined) {
                throw new runtime.RequiredError('gridbasecrs', 'Required parameter requestParameters.gridbasecrs was null or undefined when calling wcsGetCoverageHandler.');
            }
            const queryParameters = {};
            if (requestParameters.version !== undefined) {
                queryParameters['version'] = requestParameters.version;
            }
            if (requestParameters.service !== undefined) {
                queryParameters['service'] = requestParameters.service;
            }
            if (requestParameters.request !== undefined) {
                queryParameters['request'] = requestParameters.request;
            }
            if (requestParameters.format !== undefined) {
                queryParameters['format'] = requestParameters.format;
            }
            if (requestParameters.identifier !== undefined) {
                queryParameters['identifier'] = requestParameters.identifier;
            }
            if (requestParameters.boundingbox !== undefined) {
                queryParameters['boundingbox'] = requestParameters.boundingbox;
            }
            if (requestParameters.gridbasecrs !== undefined) {
                queryParameters['gridbasecrs'] = requestParameters.gridbasecrs;
            }
            if (requestParameters.gridorigin !== undefined) {
                queryParameters['gridorigin'] = requestParameters.gridorigin;
            }
            if (requestParameters.gridoffsets !== undefined) {
                queryParameters['gridoffsets'] = requestParameters.gridoffsets;
            }
            if (requestParameters.time !== undefined) {
                queryParameters['time'] = requestParameters.time;
            }
            if (requestParameters.resx !== undefined) {
                queryParameters['resx'] = requestParameters.resx;
            }
            if (requestParameters.resy !== undefined) {
                queryParameters['resy'] = requestParameters.resy;
            }
            if (requestParameters.nodatavalue !== undefined) {
                queryParameters['nodatavalue'] = requestParameters.nodatavalue;
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
                path: `/wcs/{workflow}?request=GetCoverage`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters.workflow))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.BlobApiResponse(response);
        });
    }
    /**
     * Get WCS Coverage
     */
    wcsGetCoverageHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wcsGetCoverageHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.OGCWCSApi = OGCWCSApi;
