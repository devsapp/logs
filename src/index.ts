import { HLogger, ILogger, getCredential, reportComponent, help, commandParse } from '@serverless-devs/core';
import moment from 'moment';
import _ from 'lodash';
import SeachLogs from './utils/seachLogs';
import { HELP, CONTEXT } from './constant';
import { IInputs, ICommandParse, IProperties } from './interface';

export default class Logs {
  @HLogger(CONTEXT) logger: ILogger;

  async logs(inputs: IInputs) {
    const apts = {
      boolean: ['tail', 'help'],
      string: ['request-id', 'keyword'],
      alias: { tail: 't', 'start-time': 's', 'end-time': 'e', keyword: 'k', 'request-id': 'r', help: 'h' },
    };
    const comParse: ICommandParse = commandParse({ args: inputs.args }, apts);
    this.logger.debug(`commandParse response is: ${JSON.stringify(comParse)}`);

    if (comParse.data?.help) {
      help(HELP);
      return;
    }

    const credentials = await await getCredential(inputs.project.access);
    reportComponent('logs', {
      uid: credentials.AccountID,
      command: 'logs',
    });
    const properties: IProperties = inputs.props;

    const { region, logConfig, topic, query } = properties;
    if (_.isEmpty(logConfig)) {
      throw new Error('LogConfig configuration is empty');
    }
    if (!topic) {
      throw new Error('topic does not exist');
    }
    if (!region) {
      throw new Error('region does not exist');
    }
    const projectName = logConfig.project;
    const logStoreName = logConfig.logstore;
    if (!projectName) {
      throw new Error('logConfig.project does not exist');
    }
    if (!logStoreName) {
      throw new Error('logConfig.logstore does not exist');
    }

    const cmdParameters = comParse.data || {};

    const logsClient = new SeachLogs(credentials, region);
    if (cmdParameters.tail) {
      await logsClient.realtime(projectName, logStoreName, topic, query);
    } else {
      let from = moment().subtract(20, 'minutes').unix();
      let to = moment().unix();
      let { s: startTime, e: endTime } = cmdParameters;

      if (startTime && endTime) {
        // ????????????????????????????????????
        startTime = /^\d+$/g.test(startTime) ? startTime : startTime;
        endTime = /^\d+$/g.test(endTime) ? endTime : endTime;

        from = new Date(startTime).getTime() / 1000;
        to = new Date(endTime).getTime() / 1000;
      } else {
        // 20 minutes ago
        this.logger.warn('By default, find logs within 20 minutes...\n');
      }

      const { keyword, type, r: requestId } = cmdParameters;
      const queryErrorLog = type === 'failed';

      const historyLogs = await logsClient.history(
        projectName,
        logStoreName,
        from,
        to,
        topic,
        query,
        keyword,
        queryErrorLog,
        requestId,
      );
      logsClient.printLogs(historyLogs);
    }

    return {
      Properties: inputs.props,
    };
  }
}
