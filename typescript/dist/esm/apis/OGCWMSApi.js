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
import * as runtime from '../runtime';
/**
 *
 */
export class OGCWMSApi extends runtime.BaseAPI {
    /**
     * Get WMS Capabilities
     */
    wmsCapabilitiesHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wmsCapabilitiesHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wmsCapabilitiesHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wmsCapabilitiesHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wmsCapabilitiesHandler().');
            }
            if (requestParameters['format'] == null) {
                throw new runtime.RequiredError('format', 'Required parameter "format" was null or undefined when calling wmsCapabilitiesHandler().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wms/{workflow}?request=GetCapabilities`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))).replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"service"}}`, encodeURIComponent(String(requestParameters['service']))).replace(`{${"request"}}`, encodeURIComponent(String(requestParameters['request']))).replace(`{${"format"}}`, encodeURIComponent(String(requestParameters['format']))),
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
     * Get WMS Capabilities
     */
    wmsCapabilitiesHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wmsCapabilitiesHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get WMS Legend Graphic
     */
    wmsLegendGraphicHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wmsLegendGraphicHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wmsLegendGraphicHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wmsLegendGraphicHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wmsLegendGraphicHandler().');
            }
            if (requestParameters['layer'] == null) {
                throw new runtime.RequiredError('layer', 'Required parameter "layer" was null or undefined when calling wmsLegendGraphicHandler().');
            }
            const queryParameters = {};
            const headerParameters = {};
            if (this.configuration && this.configuration.accessToken) {
                const token = this.configuration.accessToken;
                const tokenString = yield token("session_token", []);
                if (tokenString) {
                    headerParameters["Authorization"] = `Bearer ${tokenString}`;
                }
            }
            const response = yield this.request({
                path: `/wms/{workflow}?request=GetLegendGraphic`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))).replace(`{${"version"}}`, encodeURIComponent(String(requestParameters['version']))).replace(`{${"service"}}`, encodeURIComponent(String(requestParameters['service']))).replace(`{${"request"}}`, encodeURIComponent(String(requestParameters['request']))).replace(`{${"layer"}}`, encodeURIComponent(String(requestParameters['layer']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.VoidApiResponse(response);
        });
    }
    /**
     * Get WMS Legend Graphic
     */
    wmsLegendGraphicHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.wmsLegendGraphicHandlerRaw(requestParameters, initOverrides);
        });
    }
    /**
     * Get WMS Map
     */
    wmsMapHandlerRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters['workflow'] == null) {
                throw new runtime.RequiredError('workflow', 'Required parameter "workflow" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['version'] == null) {
                throw new runtime.RequiredError('version', 'Required parameter "version" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['service'] == null) {
                throw new runtime.RequiredError('service', 'Required parameter "service" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['request'] == null) {
                throw new runtime.RequiredError('request', 'Required parameter "request" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['width'] == null) {
                throw new runtime.RequiredError('width', 'Required parameter "width" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['height'] == null) {
                throw new runtime.RequiredError('height', 'Required parameter "height" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['bbox'] == null) {
                throw new runtime.RequiredError('bbox', 'Required parameter "bbox" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['format'] == null) {
                throw new runtime.RequiredError('format', 'Required parameter "format" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['layers'] == null) {
                throw new runtime.RequiredError('layers', 'Required parameter "layers" was null or undefined when calling wmsMapHandler().');
            }
            if (requestParameters['styles'] == null) {
                throw new runtime.RequiredError('styles', 'Required parameter "styles" was null or undefined when calling wmsMapHandler().');
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
            if (requestParameters['width'] != null) {
                queryParameters['width'] = requestParameters['width'];
            }
            if (requestParameters['height'] != null) {
                queryParameters['height'] = requestParameters['height'];
            }
            if (requestParameters['bbox'] != null) {
                queryParameters['bbox'] = requestParameters['bbox'];
            }
            if (requestParameters['format'] != null) {
                queryParameters['format'] = requestParameters['format'];
            }
            if (requestParameters['layers'] != null) {
                queryParameters['layers'] = requestParameters['layers'];
            }
            if (requestParameters['crs'] != null) {
                queryParameters['crs'] = requestParameters['crs'];
            }
            if (requestParameters['styles'] != null) {
                queryParameters['styles'] = requestParameters['styles'];
            }
            if (requestParameters['time'] != null) {
                queryParameters['time'] = requestParameters['time'];
            }
            if (requestParameters['transparent'] != null) {
                queryParameters['transparent'] = requestParameters['transparent'];
            }
            if (requestParameters['bgcolor'] != null) {
                queryParameters['bgcolor'] = requestParameters['bgcolor'];
            }
            if (requestParameters['sld'] != null) {
                queryParameters['sld'] = requestParameters['sld'];
            }
            if (requestParameters['sldBody'] != null) {
                queryParameters['sld_body'] = requestParameters['sldBody'];
            }
            if (requestParameters['elevation'] != null) {
                queryParameters['elevation'] = requestParameters['elevation'];
            }
            if (requestParameters['exceptions'] != null) {
                queryParameters['exceptions'] = requestParameters['exceptions'];
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
                path: `/wms/{workflow}?request=GetMap`.replace(`{${"workflow"}}`, encodeURIComponent(String(requestParameters['workflow']))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.BlobApiResponse(response);
        });
    }
    /**
     * Get WMS Map
     */
    wmsMapHandler(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.wmsMapHandlerRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
