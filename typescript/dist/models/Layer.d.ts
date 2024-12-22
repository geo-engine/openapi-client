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
import type { ProviderLayerId } from './ProviderLayerId';
import type { Symbology } from './Symbology';
import type { Workflow } from './Workflow';
/**
 *
 * @export
 * @interface Layer
 */
export interface Layer {
    /**
     *
     * @type {string}
     * @memberof Layer
     */
    description: string;
    /**
     *
     * @type {ProviderLayerId}
     * @memberof Layer
     */
    id: ProviderLayerId;
    /**
     * metadata used for loading the data
     * @type {{ [key: string]: string; }}
     * @memberof Layer
     */
    metadata?: {
        [key: string]: string;
    };
    /**
     *
     * @type {string}
     * @memberof Layer
     */
    name: string;
    /**
     * properties, for instance, to be rendered in the UI
     * @type {Array<Array<string>>}
     * @memberof Layer
     */
    properties?: Array<Array<string>>;
    /**
     *
     * @type {Symbology}
     * @memberof Layer
     */
    symbology?: Symbology | null;
    /**
     *
     * @type {Workflow}
     * @memberof Layer
     */
    workflow: Workflow;
}
/**
 * Check if a given object implements the Layer interface.
 */
export declare function instanceOfLayer(value: object): boolean;
export declare function LayerFromJSON(json: any): Layer;
export declare function LayerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Layer;
export declare function LayerToJSON(value?: Layer | null): any;
