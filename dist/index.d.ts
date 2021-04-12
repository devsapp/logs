import { ILogger } from '@serverless-devs/core';
import { IInputs, IProperties } from './interface';
export default class Logs {
    logger: ILogger;
    logs(inputs: IInputs): Promise<{
        Properties: IProperties;
    }>;
}
