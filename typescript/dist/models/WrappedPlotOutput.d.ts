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
import type { PlotOutputFormat } from './PlotOutputFormat';
/**
 *
 * @export
 * @interface WrappedPlotOutput
 */
export interface WrappedPlotOutput {
    /**
     *
     * @type {object}
     * @memberof WrappedPlotOutput
     */
    data: object;
    /**
     *
     * @type {PlotOutputFormat}
     * @memberof WrappedPlotOutput
     */
    outputFormat: PlotOutputFormat;
    /**
     *
     * @type {string}
     * @memberof WrappedPlotOutput
     */
    plotType: string;
}
/**
 * Check if a given object implements the WrappedPlotOutput interface.
 */
export declare function instanceOfWrappedPlotOutput(value: object): value is WrappedPlotOutput;
export declare function WrappedPlotOutputFromJSON(json: any): WrappedPlotOutput;
export declare function WrappedPlotOutputFromJSONTyped(json: any, ignoreDiscriminator: boolean): WrappedPlotOutput;
export declare function WrappedPlotOutputToJSON(json: any): WrappedPlotOutput;
export declare function WrappedPlotOutputToJSONTyped(value?: WrappedPlotOutput | null, ignoreDiscriminator?: boolean): any;
