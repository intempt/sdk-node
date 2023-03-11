/* tslint:disable */
/* eslint-disable */

export * as CDPMetadata from './generated/cdp-metadata';
export * as Metric from './generated/metric';
export * as PushSource from './generated/push-source';
export { ApiResponse, ConfigurationParameters, Configuration, DefaultConfig, ResponseError, FetchError, RequiredError } from './runtime';

import { SourcesApi } from './generated/push-source';
import { ConsentRegulation } from './generated/cdp-metadata';
import Batcher from './Batcher';

export class EventRecorder {
    constructor(
        private orgName: string,
        private projectName: string,
        private sourceId: string,
        private sourcesApi: SourcesApi

    ) { }
    /**
     * recordEvent
     */
    public recordEvent(name: string, data: {} | {}[]): Promise<void> {
        const collectionName = name.toLocaleLowerCase();
        if (!collectionName) {
            throw new Error("Collection name cannot be an empty string");
        }
        return this.sourcesApi.addDataItems({
            orgName: this.orgName,
            projectName: this.projectName,
            sourceId: this.sourceId,
            body: { [collectionName]: [data] }
        });
    }

    public identify(profileId: string, user_identifier: string, account_identifier: string | null): Promise<void> {
        return this.recordEvent('profile', {
            profileId: profileId,
            user_identifier: user_identifier,
            account_identifier: account_identifier ? account_identifier : null
        });
    }

    /**
     * 
     * @param consents example: 
     * ```
     * {
     *   regulation: 'GDPR', // as ConsentRegulation
     *   purpose: 'advertising',
     *   consented: true
     * }
     * ```
     */
    public trackConsents(consents: { regulation: ConsentRegulation, purpose: string, consented: boolean }[]) {
        return Promise.all(consents.map(e => this.recordEvent('profile', { regulation: e.regulation, purpose: e.purpose, consented: !!e.consented })));
    }
}

interface NameAndEvent<T> {
    collName: string
    event: T
}
export class EventBatcher {
    private readonly batcher = Batcher(this.flush.bind(this), { maximum: 5 });
    constructor(
        private orgName: string,
        private projectName: string,
        private sourceId: string,
        private sourcesApi: SourcesApi) { }

    public async addEvent(collName: string, event: any) {
        const collectionName = collName.toLocaleLowerCase();
        if (!collectionName) {
            throw new Error("Collection name cannot be an empty string");
        }
        return this.batcher({ collName: collectionName, event: event })
    }

    private flush(a: NameAndEvent<any>[]) {
        const body = a.reduce((p, v) => {
            if (!p.hasOwnProperty(v.collName)) {
                p[v.collName] = [];
            }
            p[v.collName].push(v.event);
            return p;
        }, {} as { [k: string]: any[] });
        return this.sourcesApi.addDataItems({
            orgName: this.orgName,
            projectName: this.projectName,
            sourceId: this.sourceId,
            body: body
        });
    }
}