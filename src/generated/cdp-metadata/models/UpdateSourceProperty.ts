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
 * @interface UpdateSourceProperty
 */
export interface UpdateSourceProperty {
    /**
     * the value of the property, free text
     * @type {string}
     * @memberof UpdateSourceProperty
     */
    propertyValue: string;
}

/**
 * Check if a given object implements the UpdateSourceProperty interface.
 */
export function instanceOfUpdateSourceProperty(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "propertyValue" in value;

    return isInstance;
}

export function UpdateSourcePropertyFromJSON(json: any): UpdateSourceProperty {
    return UpdateSourcePropertyFromJSONTyped(json, false);
}

export function UpdateSourcePropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateSourceProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'propertyValue': json['propertyValue'],
    };
}

export function UpdateSourcePropertyToJSON(value?: UpdateSourceProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'propertyValue': value.propertyValue,
    };
}
