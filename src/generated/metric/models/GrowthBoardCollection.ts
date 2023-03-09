/* tslint:disable */
/* eslint-disable */
/**
 * metric
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GrowthBoardCollectionEmbedded } from './GrowthBoardCollectionEmbedded';
import {
    GrowthBoardCollectionEmbeddedFromJSON,
    GrowthBoardCollectionEmbeddedFromJSONTyped,
    GrowthBoardCollectionEmbeddedToJSON,
} from './GrowthBoardCollectionEmbedded';

/**
 * 
 * @export
 * @interface GrowthBoardCollection
 */
export interface GrowthBoardCollection {
    /**
     * 
     * @type {GrowthBoardCollectionEmbedded}
     * @memberof GrowthBoardCollection
     */
    embedded?: GrowthBoardCollectionEmbedded;
}

/**
 * Check if a given object implements the GrowthBoardCollection interface.
 */
export function instanceOfGrowthBoardCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GrowthBoardCollectionFromJSON(json: any): GrowthBoardCollection {
    return GrowthBoardCollectionFromJSONTyped(json, false);
}

export function GrowthBoardCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrowthBoardCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : GrowthBoardCollectionEmbeddedFromJSON(json['_embedded']),
    };
}

export function GrowthBoardCollectionToJSON(value?: GrowthBoardCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': GrowthBoardCollectionEmbeddedToJSON(value.embedded),
    };
}

