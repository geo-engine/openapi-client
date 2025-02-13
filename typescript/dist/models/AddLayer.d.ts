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
import type { Symbology } from './Symbology';
import type { Workflow } from './Workflow';
/**
 *
 * @export
 * @interface AddLayer
 */
export interface AddLayer {
    /**
     *
     * @type {string}
     * @memberof AddLayer
     */
    description: string;
    /**
     * metadata used for loading the data
     * @type {{ [key: string]: string; }}
     * @memberof AddLayer
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     *
     * @type {string}
     * @memberof AddLayer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof AddLayer
     */
    properties?: Array<Array<string>>;
    /**
     *
     * @type {Symbology}
     * @memberof AddLayer
     */
    symbology?: Symbology | null;
    /**
     *
     * @type {Workflow}
     * @memberof AddLayer
     */
    workflow: Workflow;
}
/**
 * Check if a given object implements the AddLayer interface.
 */
export declare function instanceOfAddLayer(value: object): value is AddLayer;
export declare function AddLayerFromJSON(json: any): AddLayer;
export declare function AddLayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddLayer;
export declare function AddLayerToJSON(json: any): AddLayer;
export declare function AddLayerToJSONTyped(value?: AddLayer | null, ignoreDiscriminator?: boolean): any;
