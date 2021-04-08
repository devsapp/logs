"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTEXT = exports.HELP = void 0;
exports.HELP = [
    {
        header: 'Options',
        optionList: [
            {
                name: 'tail',
                description: 'Real-time query log',
                alias: 't',
                defaultOption: false,
                type: Boolean,
            },
            {
                name: 'startTime',
                description: 'Query log start time',
                alias: 's',
                defaultOption: false,
                type: Number,
            },
            {
                name: 'endTime',
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
                name: 'requestId',
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
            {
                name: 'help',
                description: 'Use guide',
                alias: 'h',
                type: Boolean,
            },
        ],
    },
    {
        header: 'Examples',
        content: [
            {
                desc: '使用: logs -s <startTime> -e <endTime> -r <requestId>',
                example: '$ logs -s 1611823690000 -e 1611827290000 -k *** --type failed -r ********',
            },
        ],
    },
];
exports.CONTEXT = 'FC_LOGS';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvY29uc3RhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQWEsUUFBQSxJQUFJLEdBQUc7SUFDbEI7UUFDRSxNQUFNLEVBQUUsU0FBUztRQUNqQixVQUFVLEVBQUU7WUFDVjtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixXQUFXLEVBQUUscUJBQXFCO2dCQUNsQyxLQUFLLEVBQUUsR0FBRztnQkFDVixhQUFhLEVBQUUsS0FBSztnQkFDcEIsSUFBSSxFQUFFLE9BQU87YUFDZDtZQUNEO2dCQUNFLElBQUksRUFBRSxXQUFXO2dCQUNqQixXQUFXLEVBQUUsc0JBQXNCO2dCQUNuQyxLQUFLLEVBQUUsR0FBRztnQkFDVixhQUFhLEVBQUUsS0FBSztnQkFDcEIsSUFBSSxFQUFFLE1BQU07YUFDYjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsV0FBVyxFQUFFLGVBQWU7Z0JBQzVCLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFdBQVc7Z0JBQ2pCLFdBQVcsRUFBRSx1REFBdUQ7Z0JBQ3BFLEtBQUssRUFBRSxHQUFHO2dCQUNWLGFBQWEsRUFBRSxLQUFLO2dCQUNwQixJQUFJLEVBQUUsTUFBTTthQUNiO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLE1BQU07Z0JBQ1osV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsYUFBYSxFQUFFLEtBQUs7Z0JBQ3BCLElBQUksRUFBRSxNQUFNO2FBQ2I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixXQUFXLEVBQUUsV0FBVztnQkFDeEIsS0FBSyxFQUFFLEdBQUc7Z0JBQ1YsSUFBSSxFQUFFLE9BQU87YUFDZDtTQUNGO0tBQ0Y7SUFDRDtRQUNFLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE9BQU8sRUFBRTtZQUNQO2dCQUNFLElBQUksRUFBRSxxREFBcUQ7Z0JBQzNELE9BQU8sRUFBRSwyRUFBMkU7YUFDckY7U0FDRjtLQUNGO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLFNBQVMsQ0FBQyJ9