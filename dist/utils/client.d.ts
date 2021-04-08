import { ICredentials } from '../interface';
export default class Client {
    region: string;
    credentials: ICredentials;
    accountId: string;
    accessKeyID: string;
    accessKeySecret: string;
    stsToken: string;
    constructor(credentials: ICredentials, region: string);
    buildSlsClient(): any;
}
