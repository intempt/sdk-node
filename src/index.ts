/* tslint:disable */
/* eslint-disable */

export * as CDPMetadata from './generated/cdp-metadata';
export * as Metric from './generated/metric';
export * as PushSource from './generated/push-source';

import { SourcesApi } from './generated/push-source';
import { ConsentRegulation } from './generated/cdp-metadata';

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
    public recordEvent(name: string, data: {}): void {
        this.sourcesApi.addDataItems({
            orgName: this.orgName,
            projectName: this.projectName,
            sourceId: this.sourceId,
            body: data
        });
    }

    public identify(profileId: string, user_identifier: string, account_identifier: string | null) {
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
     *   "regulation": "GDPR", // as ConsentRegulation
     *   "purpose": "advertising",
     *   "consented": true
     * }
     * ```
     */
    public trackConsents(consents: { regulation: ConsentRegulation, purpose: string, consented: boolean }[]) {
        consents.forEach(e => this.recordEvent('profile', { regulation: e.regulation, purpose: e.purpose, consented: !!e.consented }));
    }
}
