export * from './addonAttachmentsApi';
import { AddonAttachmentsApi } from './addonAttachmentsApi';
export * from './addonServicesApi';
import { AddonServicesApi } from './addonServicesApi';
export * from './addonsApi';
import { AddonsApi } from './addonsApi';
export * from './collaboratorsApi';
import { CollaboratorsApi } from './collaboratorsApi';
export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './domainsApi';
import { DomainsApi } from './domainsApi';
export * from './formationApi';
import { FormationApi } from './formationApi';
export * from './pipelinePromotionsApi';
import { PipelinePromotionsApi } from './pipelinePromotionsApi';
export * from './pipelinesApi';
import { PipelinesApi } from './pipelinesApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AddonAttachmentsApi, AddonServicesApi, AddonsApi, CollaboratorsApi, DefaultApi, DomainsApi, FormationApi, PipelinePromotionsApi, PipelinesApi];
