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
/**
 * 
 * @export
 * @interface Variant
 */
export interface Variant {
    /**
     * universally unique identifier (UUID)
     * @type {string}
     * @memberof Variant
     */
    id: string;
    /**
     * a slugified version of title; calculated during title change.
     * @type {string}
     * @memberof Variant
     */
    name: string;
    /**
     * a human readable title of the entity
     * @type {string}
     * @memberof Variant
     */
    title: string;
    /**
     * traffic distribution in the experiment; in persentage.
     * The sum of all variant should equal or less than 100.
     * @type {number}
     * @memberof Variant
     */
    trafficDistribution: number;
    /**
     * 
     * @type {{ [key: string]: string; }}
     * @memberof Variant
     */
    variables: { [key: string]: string; };
    /**
     * 
     * @type {string}
     * @memberof Variant
     */
    changesText: string;
}

/**
 * Check if a given object implements the Variant interface.
 */
export function instanceOfVariant(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "trafficDistribution" in value;
    isInstance = isInstance && "variables" in value;
    isInstance = isInstance && "changesText" in value;

    return isInstance;
}

export function VariantFromJSON(json: any): Variant {
    return VariantFromJSONTyped(json, false);
}

export function VariantFromJSONTyped(json: any, ignoreDiscriminator: boolean): Variant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'title': json['title'],
        'trafficDistribution': json['trafficDistribution'],
        'variables': json['variables'],
        'changesText': json['changesText'],
    };
}

export function VariantToJSON(value?: Variant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
        'title': value.title,
        'trafficDistribution': value.trafficDistribution,
        'variables': value.variables,
        'changesText': value.changesText,
    };
}

