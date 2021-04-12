export interface ICommandParse {
  rawData?: string;
  data?: any;
}

export interface IProperties{
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
  project: {
    component: string;
    access: string;
    projectName: string;
  };
  appName: string;
  args: string;
  path: any;
}

export interface ICredentials {
  AccountID: string;
  AccessKeyID: string;
  AccessKeySecret: string;
  SecurityToken?: string;
}
