import { ILogger } from '@serverless-devs/core';
import Client from './client';
interface IGetLogs {
    projectName: string;
    logStoreName: string;
    from: string | number;
    to: string | number;
    topic: string;
    query: string;
}
export default class SeachLogs extends Client {
    slsClient: any;
    logger: ILogger;
    printLogs(historyLogs: any[]): void;
    /**
     * 过滤日志信息
     */
    private filterByKeywords;
    /**
     * 获取日志
     */
    getLogs(requestParams: IGetLogs, tabReplaceStr?: string): Promise<any[]>;
    /**
     * 获取历史日志
     * @param {*} projectName
     * @param {*} logStoreName
     * @param {*} from
     * @param {*} to
     * @param {*} topic
     * @param {*} query
     * @param {*} keyword 关键字过滤
     * @param {*} queryErrorLog
     * @param {*} requestId
     */
    history(projectName: string, logStoreName: string, from: string | number, to: string | number, topic: string, query: string, keyword?: string, queryErrorLog?: boolean, requestId?: string): Promise<any[]>;
    /**
     * 获取实时日志
     * @param {*} projectName
     * @param {*} logStoreName
     * @param {*} topic
     * @param {*} query
     */
    realtime(projectName: string, logStoreName: string, topic: string, query: string): Promise<void>;
}
export {};
