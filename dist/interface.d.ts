export interface ICommandParse {
    rawData?: string;
    data?: any;
}
export interface IProperties {
    region: string;
    logConfig: {
        project: string;
        logstore: string;
    };
    topic: string;
    query: string;
}
export interface IArgs {
    tail: boolean;
    help: boolean;
    requestId: string;
    keyword: string;
    endTime: number;
    startTime: number;
}
export interface IInputs {
    props: IProperties;
    credentials: ICredentials;
    appName: string;
    args: string;
    path: any;
}
export interface ICredentials {
    Alias: string;
    AccountID: string;
    AccessKeyID: string;
    AccessKeySecret: string;
    SecurityToken?: string;
}
