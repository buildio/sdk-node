export * from './defaultApi';
import { DefaultApi } from './defaultApi';
export * from './domainsApi';
import { DomainsApi } from './domainsApi';
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

export const APIS = [DefaultApi, DomainsApi, PipelinesApi];
