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
import type { Source } from './Source';
import {
    SourceFromJSON,
    SourceFromJSONTyped,
    SourceToJSON,
} from './Source';

/**
 * 
 * @export
 * @interface SourceCollectionEmbedded
 */
export interface SourceCollectionEmbedded {
    /**
     * 
     * @type {Array<Source>}
     * @memberof SourceCollectionEmbedded
     */
    sources?: Array<Source>;
}

/**
 * Check if a given object implements the SourceCollectionEmbedded interface.
 */
export function instanceOfSourceCollectionEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceCollectionEmbeddedFromJSON(json: any): SourceCollectionEmbedded {
    return SourceCollectionEmbeddedFromJSONTyped(json, false);
}

export function SourceCollectionEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceCollectionEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sources': !exists(json, 'sources') ? undefined : ((json['sources'] as Array<any>).map(SourceFromJSON)),
    };
}

export function SourceCollectionEmbeddedToJSON(value?: SourceCollectionEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sources': value.sources === undefined ? undefined : ((value.sources as Array<any>).map(SourceToJSON)),
    };
}
