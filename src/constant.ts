export const HELP = [
  {
    header: 'Log',
    content: 'Log query function.',
  },
  {
    header: 'Usage',
    content: [
      { example: '$ s logs <options>' },
    ],
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'tail',
        description: 'Continuous log output mode',
        alias: 't',
        defaultOption: false,
        type: Boolean,
      },
      {
        name: 'start-time',
        description: 'Query log start time',
        alias: 's',
        defaultOption: false,
        type: Number,
      },
      {
        name: 'end-time',
        description: 'Query log end time',
        alias: 'e',
        defaultOption: false,
        type: Number,
      },
      {
        name: 'keyword',
        description: 'Keyword query',
        alias: 'k',
        defaultOption: false,
        type: String,
      },
      {
        name: 'request-id',
        description: 'Query according to requestId within the time interval',
        alias: 'r',
        defaultOption: false,
        type: String,
      },
      {
        name: 'type',
        description: 'Log type query, value: failed',
        defaultOption: false,
        type: String,
      },
    ],
  },
  {
    header: 'Global Options',
    optionList: [
      {
        name: 'help',
        description: 'Logs help for command',
        alias: 'h',
        type: Boolean,
      },
    ],
  },
  {
    header: 'Examples with Yaml',
    content: [
      {
        desc: 'Query logs in the time interval',
        example: '$ s exec -- logs -s 2021-06-07T02:54:00+08:00 -e 2021-06-07T02:54:59+08:00',
      },
      {
        desc: 'Continuous log output mode',
        example: '$ s exec -- logs -t',
      },
    ],
  },
];

export const CONTEXT = 'FC_LOGS';
