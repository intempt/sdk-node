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
import type { SourceProperty } from './SourceProperty';
import {
    SourcePropertyFromJSON,
    SourcePropertyFromJSONTyped,
    SourcePropertyToJSON,
} from './SourceProperty';

/**
 * 
 * @export
 * @interface SourcePropertyCollectionEmbedded
 */
export interface SourcePropertyCollectionEmbedded {
    /**
     * 
     * @type {Array<SourceProperty>}
     * @memberof SourcePropertyCollectionEmbedded
     */
    propertyList?: Array<SourceProperty>;
}

/**
 * Check if a given object implements the SourcePropertyCollectionEmbedded interface.
 */
export function instanceOfSourcePropertyCollectionEmbedded(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourcePropertyCollectionEmbeddedFromJSON(json: any): SourcePropertyCollectionEmbedded {
    return SourcePropertyCollectionEmbeddedFromJSONTyped(json, false);
}

export function SourcePropertyCollectionEmbeddedFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourcePropertyCollectionEmbedded {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'propertyList': !exists(json, 'propertyList') ? undefined : ((json['propertyList'] as Array<any>).map(SourcePropertyFromJSON)),
    };
}

export function SourcePropertyCollectionEmbeddedToJSON(value?: SourcePropertyCollectionEmbedded | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'propertyList': value.propertyList === undefined ? undefined : ((value.propertyList as Array<any>).map(SourcePropertyToJSON)),
    };
}

