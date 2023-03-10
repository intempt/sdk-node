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


import * as runtime from '../runtime';
import type {
  CreateSource,
  CreateSourceProperty,
  Source,
  SourceApiKey,
  SourceCollection,
  SourceProperty,
  SourcePropertyCollection,
  UpdateSource,
  UpdateSourceProperty,
} from '../models';
import {
    CreateSourceFromJSON,
    CreateSourceToJSON,
    CreateSourcePropertyFromJSON,
    CreateSourcePropertyToJSON,
    SourceFromJSON,
    SourceToJSON,
    SourceApiKeyFromJSON,
    SourceApiKeyToJSON,
    SourceCollectionFromJSON,
    SourceCollectionToJSON,
    SourcePropertyFromJSON,
    SourcePropertyToJSON,
    SourcePropertyCollectionFromJSON,
    SourcePropertyCollectionToJSON,
    UpdateSourceFromJSON,
    UpdateSourceToJSON,
    UpdateSourcePropertyFromJSON,
    UpdateSourcePropertyToJSON,
} from '../models';

export interface CreateNewSourceRequest {
    orgName: string;
    projectName: string;
    createSource: CreateSource;
}

export interface CreateSourcePropertiesRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
    createSourceProperty: Array<CreateSourceProperty>;
}

export interface DeleteSourceByIdRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
}

export interface DeleteSourcePropertiesRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
    propName: string;
}

export interface FetchSourceApiKeyByIdRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
}

export interface FetchSourceByIdRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
}

export interface FetchSourcePropertiesRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
}

export interface FetchSourcePropertyRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
    propName: string;
}

export interface FetchSourcesRequest {
    orgName: string;
    projectName: string;
    name?: string;
    type?: string;
    identifierType?: string;
}

export interface UpdateSourceByIdRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
    updateSource: UpdateSource;
}

export interface UpdateSourcePropertiesRequest {
    orgName: string;
    projectName: string;
    sourceId: string;
    propName: string;
    updateSourceProperty: UpdateSourceProperty;
}

/**
 * 
 */
export class SourcesApi extends runtime.BaseAPI {

    /**
     * create a new Source
     */
    async createNewSourceRaw(requestParameters: CreateNewSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling createNewSource.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling createNewSource.');
        }

        if (requestParameters.createSource === null || requestParameters.createSource === undefined) {
            throw new runtime.RequiredError('createSource','Required parameter requestParameters.createSource was null or undefined when calling createNewSource.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateSourceToJSON(requestParameters.createSource),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * create a new Source
     */
    async createNewSource(requestParameters: CreateNewSourceRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.createNewSourceRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * add a property to source
     */
    async createSourcePropertiesRaw(requestParameters: CreateSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourcePropertyCollection>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling createSourceProperties.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling createSourceProperties.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling createSourceProperties.');
        }

        if (requestParameters.createSourceProperty === null || requestParameters.createSourceProperty === undefined) {
            throw new runtime.RequiredError('createSourceProperty','Required parameter requestParameters.createSourceProperty was null or undefined when calling createSourceProperties.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/properties`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: requestParameters.createSourceProperty.map(CreateSourcePropertyToJSON),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourcePropertyCollectionFromJSON(jsonValue));
    }

    /**
     * add a property to source
     */
    async createSourceProperties(requestParameters: CreateSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourcePropertyCollection> {
        const response = await this.createSourcePropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * deleteSourceById
     */
    async deleteSourceByIdRaw(requestParameters: DeleteSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling deleteSourceById.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling deleteSourceById.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling deleteSourceById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * deleteSourceById
     */
    async deleteSourceById(requestParameters: DeleteSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.deleteSourceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * delete the property
     */
    async deleteSourcePropertiesRaw(requestParameters: DeleteSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourceProperty>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling deleteSourceProperties.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling deleteSourceProperties.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling deleteSourceProperties.');
        }

        if (requestParameters.propName === null || requestParameters.propName === undefined) {
            throw new runtime.RequiredError('propName','Required parameter requestParameters.propName was null or undefined when calling deleteSourceProperties.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/properties/{propName}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))).replace(`{${"propName"}}`, encodeURIComponent(String(requestParameters.propName))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourcePropertyFromJSON(jsonValue));
    }

    /**
     * delete the property
     */
    async deleteSourceProperties(requestParameters: DeleteSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourceProperty> {
        const response = await this.deleteSourcePropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * fetchSourceApiKeyById
     */
    async fetchSourceApiKeyByIdRaw(requestParameters: FetchSourceApiKeyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourceApiKey>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling fetchSourceApiKeyById.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling fetchSourceApiKeyById.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling fetchSourceApiKeyById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/api-keys/current`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceApiKeyFromJSON(jsonValue));
    }

    /**
     * fetchSourceApiKeyById
     */
    async fetchSourceApiKeyById(requestParameters: FetchSourceApiKeyByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourceApiKey> {
        const response = await this.fetchSourceApiKeyByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * fetchSourceById
     */
    async fetchSourceByIdRaw(requestParameters: FetchSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling fetchSourceById.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling fetchSourceById.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling fetchSourceById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * fetchSourceById
     */
    async fetchSourceById(requestParameters: FetchSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.fetchSourceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * fetchSourceProperties
     */
    async fetchSourcePropertiesRaw(requestParameters: FetchSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourcePropertyCollection>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling fetchSourceProperties.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling fetchSourceProperties.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling fetchSourceProperties.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/properties`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourcePropertyCollectionFromJSON(jsonValue));
    }

    /**
     * fetchSourceProperties
     */
    async fetchSourceProperties(requestParameters: FetchSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourcePropertyCollection> {
        const response = await this.fetchSourcePropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * fetchSourceProperty
     */
    async fetchSourcePropertyRaw(requestParameters: FetchSourcePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourceProperty>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling fetchSourceProperty.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling fetchSourceProperty.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling fetchSourceProperty.');
        }

        if (requestParameters.propName === null || requestParameters.propName === undefined) {
            throw new runtime.RequiredError('propName','Required parameter requestParameters.propName was null or undefined when calling fetchSourceProperty.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/properties/{propName}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))).replace(`{${"propName"}}`, encodeURIComponent(String(requestParameters.propName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourcePropertyFromJSON(jsonValue));
    }

    /**
     * fetchSourceProperty
     */
    async fetchSourceProperty(requestParameters: FetchSourcePropertyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourceProperty> {
        const response = await this.fetchSourcePropertyRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * The list of sources
     */
    async fetchSourcesRaw(requestParameters: FetchSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourceCollection>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling fetchSources.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling fetchSources.');
        }

        const queryParameters: any = {};

        if (requestParameters.name !== undefined) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.type !== undefined) {
            queryParameters['type'] = requestParameters.type;
        }

        if (requestParameters.identifierType !== undefined) {
            queryParameters['identifierType'] = requestParameters.identifierType;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceCollectionFromJSON(jsonValue));
    }

    /**
     * The list of sources
     */
    async fetchSources(requestParameters: FetchSourcesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourceCollection> {
        const response = await this.fetchSourcesRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updateSourceById
     */
    async updateSourceByIdRaw(requestParameters: UpdateSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Source>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling updateSourceById.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling updateSourceById.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling updateSourceById.');
        }

        if (requestParameters.updateSource === null || requestParameters.updateSource === undefined) {
            throw new runtime.RequiredError('updateSource','Required parameter requestParameters.updateSource was null or undefined when calling updateSourceById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSourceToJSON(requestParameters.updateSource),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourceFromJSON(jsonValue));
    }

    /**
     * updateSourceById
     */
    async updateSourceById(requestParameters: UpdateSourceByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Source> {
        const response = await this.updateSourceByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * update the property
     */
    async updateSourcePropertiesRaw(requestParameters: UpdateSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<SourceProperty>> {
        if (requestParameters.orgName === null || requestParameters.orgName === undefined) {
            throw new runtime.RequiredError('orgName','Required parameter requestParameters.orgName was null or undefined when calling updateSourceProperties.');
        }

        if (requestParameters.projectName === null || requestParameters.projectName === undefined) {
            throw new runtime.RequiredError('projectName','Required parameter requestParameters.projectName was null or undefined when calling updateSourceProperties.');
        }

        if (requestParameters.sourceId === null || requestParameters.sourceId === undefined) {
            throw new runtime.RequiredError('sourceId','Required parameter requestParameters.sourceId was null or undefined when calling updateSourceProperties.');
        }

        if (requestParameters.propName === null || requestParameters.propName === undefined) {
            throw new runtime.RequiredError('propName','Required parameter requestParameters.propName was null or undefined when calling updateSourceProperties.');
        }

        if (requestParameters.updateSourceProperty === null || requestParameters.updateSourceProperty === undefined) {
            throw new runtime.RequiredError('updateSourceProperty','Required parameter requestParameters.updateSourceProperty was null or undefined when calling updateSourceProperties.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/{orgName}/projects/{projectName}/sources/{sourceId}/properties/{propName}`.replace(`{${"orgName"}}`, encodeURIComponent(String(requestParameters.orgName))).replace(`{${"projectName"}}`, encodeURIComponent(String(requestParameters.projectName))).replace(`{${"sourceId"}}`, encodeURIComponent(String(requestParameters.sourceId))).replace(`{${"propName"}}`, encodeURIComponent(String(requestParameters.propName))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UpdateSourcePropertyToJSON(requestParameters.updateSourceProperty),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SourcePropertyFromJSON(jsonValue));
    }

    /**
     * update the property
     */
    async updateSourceProperties(requestParameters: UpdateSourcePropertiesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<SourceProperty> {
        const response = await this.updateSourcePropertiesRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
