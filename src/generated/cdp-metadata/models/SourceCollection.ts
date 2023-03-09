/* tslint:disable */
/* eslint-disable */
/**
 * cdp-metadata
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
import type { SourceCollectionEmbedded } from './SourceCollectionEmbedded';
import {
    SourceCollectionEmbeddedFromJSON,
    SourceCollectionEmbeddedFromJSONTyped,
    SourceCollectionEmbeddedToJSON,
} from './SourceCollectionEmbedded';

/**
 * 
 * @export
 * @interface SourceCollection
 */
export interface SourceCollection {
    /**
     * 
     * @type {SourceCollectionEmbedded}
     * @memberof SourceCollection
     */
    embedded?: SourceCollectionEmbedded;
    /**
     * number of elemnts
     * @type {number}
     * @memberof SourceCollection
     */
    total?: number;
}

/**
 * Check if a given object implements the SourceCollection interface.
 */
export function instanceOfSourceCollection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceCollectionFromJSON(json: any): SourceCollection {
    return SourceCollectionFromJSONTyped(json, false);
}

export function SourceCollectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceCollection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'embedded': !exists(json, '_embedded') ? undefined : SourceCollectionEmbeddedFromJSON(json['_embedded']),
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function SourceCollectionToJSON(value?: SourceCollection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '_embedded': SourceCollectionEmbeddedToJSON(value.embedded),
        'total': value.total,
    };
}
