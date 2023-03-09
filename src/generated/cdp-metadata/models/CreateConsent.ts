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
import type { ConsentRegulation } from './ConsentRegulation';
import {
    ConsentRegulationFromJSON,
    ConsentRegulationFromJSONTyped,
    ConsentRegulationToJSON,
} from './ConsentRegulation';

/**
 * 
 * @export
 * @interface CreateConsent
 */
export interface CreateConsent {
    /**
     * 
     * @type {ConsentRegulation}
     * @memberof CreateConsent
     */
    regulation?: ConsentRegulation;
    /**
     * 
     * @type {string}
     * @memberof CreateConsent
     */
    purpose?: string;
}

/**
 * Check if a given object implements the CreateConsent interface.
 */
export function instanceOfCreateConsent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateConsentFromJSON(json: any): CreateConsent {
    return CreateConsentFromJSONTyped(json, false);
}

export function CreateConsentFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConsent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'regulation': !exists(json, 'regulation') ? undefined : ConsentRegulationFromJSON(json['regulation']),
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
    };
}

export function CreateConsentToJSON(value?: CreateConsent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'regulation': ConsentRegulationToJSON(value.regulation),
        'purpose': value.purpose,
    };
}
