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


/**
 * 
 * @export
 */
export const GrowthBoardReportEndpoint = {
    Count: 'count',
    Analytic: 'analytic',
    Values: 'values',
    Flowchart: 'flowchart',
    Statistics: 'statistics'
} as const;
export type GrowthBoardReportEndpoint = typeof GrowthBoardReportEndpoint[keyof typeof GrowthBoardReportEndpoint];


export function GrowthBoardReportEndpointFromJSON(json: any): GrowthBoardReportEndpoint {
    return GrowthBoardReportEndpointFromJSONTyped(json, false);
}

export function GrowthBoardReportEndpointFromJSONTyped(json: any, ignoreDiscriminator: boolean): GrowthBoardReportEndpoint {
    return json as GrowthBoardReportEndpoint;
}

export function GrowthBoardReportEndpointToJSON(value?: GrowthBoardReportEndpoint | null): any {
    return value as any;
}
