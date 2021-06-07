"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTEXT = exports.HELP = void 0;
exports.HELP = [
    {
        header: 'Description',
        content: 'Log query function.',
    },
    {
        header: 'Usage',
        content: [
            { example: '$ s exec -- logs' },
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
exports.CONTEXT = 'FC_LOGS';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxJQUFJLEdBQUc7SUFDbEI7UUFDRSxNQUFNLEVBQUUsYUFBYTtRQUNyQixPQUFPLEVBQUUscUJBQXFCO0tBQy9CO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsT0FBTztRQUNmLE9BQU8sRUFBRTtZQUNQLEVBQUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFO1NBQ2hDO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxTQUFTO1FBQ2pCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSw0QkFBNEI7Z0JBQ3pDLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsT0FBTzthQUNkO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFdBQVcsRUFBRSxzQkFBc0I7Z0JBQ25DLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFVBQVU7Z0JBQ2hCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLFdBQVcsRUFBRSx1REFBdUQ7Z0JBQ3BFLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsZ0JBQWdCO1FBQ3hCLFVBQVUsRUFBRTtZQUNWO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLFdBQVcsRUFBRSx1QkFBdUI7Z0JBQ3BDLEtBQUssRUFBRSxHQUFHO2dCQUNWLElBQUksRUFBRSxPQUFPO2FBQ2Q7U0FDRjtLQUNGO0lBQ0Q7UUFDRSxNQUFNLEVBQUUsb0JBQW9CO1FBQzVCLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxpQ0FBaUM7Z0JBQ3ZDLE9BQU8sRUFBRSw0RUFBNEU7YUFDdEY7WUFDRDtnQkFDRSxJQUFJLEVBQUUsNEJBQTRCO2dCQUNsQyxPQUFPLEVBQUUscUJBQXFCO2FBQy9CO1NBQ0Y7S0FDRjtDQUNGLENBQUM7QUFFVyxRQUFBLE9BQU8sR0FBRyxTQUFTLENBQUMifQ==