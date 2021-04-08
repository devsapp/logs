import { ILogger } from '@serverless-devs/core';
import { ICredentials } from './interface';
export default class Logs {
    logger: ILogger;
    getCredentials(credentials: {} | ICredentials, provider: string, accessAlias?: string): Promise<ICredentials>;
    logs(inputs: any): Promise<{
        Properties: any;
    }>;
}
