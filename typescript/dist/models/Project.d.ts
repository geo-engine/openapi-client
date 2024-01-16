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
import type { Plot } from './Plot';
import type { ProjectLayer } from './ProjectLayer';
import type { ProjectVersion } from './ProjectVersion';
import type { STRectangle } from './STRectangle';
import type { TimeStep } from './TimeStep';
/**
 *
 * @export
 * @interface Project
 */
export interface Project {
    /**
     *
     * @type {STRectangle}
     * @memberof Project
     */
    bounds: STRectangle;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    description: string;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    id: string;
    /**
     *
     * @type {Array<ProjectLayer>}
     * @memberof Project
     */
    layers: Array<ProjectLayer>;
    /**
     *
     * @type {string}
     * @memberof Project
     */
    name: string;
    /**
     *
     * @type {Array<Plot>}
     * @memberof Project
     */
    plots: Array<Plot>;
    /**
     *
     * @type {TimeStep}
     * @memberof Project
     */
    timeStep: TimeStep;
    /**
     *
     * @type {ProjectVersion}
     * @memberof Project
     */
    version: ProjectVersion;
}
/**
 * Check if a given object implements the Project interface.
 */
export declare function instanceOfProject(value: object): boolean;
export declare function ProjectFromJSON(json: any): Project;
export declare function ProjectFromJSONTyped(json: any, ignoreDiscriminator: boolean): Project;
export declare function ProjectToJSON(value?: Project | null): any;
