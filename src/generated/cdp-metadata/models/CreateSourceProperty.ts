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
 * @interface CreateSourceProperty
 */
export interface CreateSourceProperty {
    /**
     * the name of the property, free text
     * @type {string}
     * @memberof CreateSourceProperty
     */
    propertyName: string;
    /**
     * the value of the property, free text
     * @type {string}
     * @memberof CreateSourceProperty
     */
    propertyValue: string;
}

/**
 * Check if a given object implements the CreateSourceProperty interface.
 */
export function instanceOfCreateSourceProperty(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "propertyName" in value;
    isInstance = isInstance && "propertyValue" in value;

    return isInstance;
}

export function CreateSourcePropertyFromJSON(json: any): CreateSourceProperty {
    return CreateSourcePropertyFromJSONTyped(json, false);
}

export function CreateSourcePropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateSourceProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'propertyName': json['propertyName'],
        'propertyValue': json['propertyValue'],
    };
}

export function CreateSourcePropertyToJSON(value?: CreateSourceProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'propertyName': value.propertyName,
        'propertyValue': value.propertyValue,
    };
}

