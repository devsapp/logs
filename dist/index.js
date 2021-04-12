"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@serverless-devs/core");
var moment_1 = __importDefault(require("moment"));
var seachLogs_1 = __importDefault(require("./utils/seachLogs"));
var constant_1 = require("./constant");
var Logs = /** @class */ (function () {
    function Logs() {
    }
    Logs.prototype.logs = function (inputs) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var apts, comParse, credentials, properties, region, logConfig, topic, query, projectName, logStoreName, cmdParameters, logsClient, from, to, startTime, endTime, keyword, type, requestId, queryErrorLog, historyLogs;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        apts = {
                            boolean: ['tail', 'help'],
                            string: ['requestId', 'keyword'],
                            // number: ['startTime', 'endTime'],
                            alias: { tail: 't', startTime: 's', endTime: 'e', keyword: 'k', requestId: 'r', help: 'h' },
                        };
                        comParse = core_1.commandParse({ args: inputs.args }, apts);
                        this.logger.debug("commandParse response is: " + JSON.stringify(comParse));
                        if ((_a = comParse.data) === null || _a === void 0 ? void 0 : _a.help) {
                            core_1.help(constant_1.HELP);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, core_1.getCredential(inputs.project.access)];
                    case 1: return [4 /*yield*/, _b.sent()];
                    case 2:
                        credentials = _b.sent();
                        properties = inputs.props;
                        region = properties.region, logConfig = properties.logConfig, topic = properties.topic, query = properties.query;
                        projectName = logConfig.project;
                        logStoreName = logConfig.logstore;
                        cmdParameters = comParse.data || {};
                        logsClient = new seachLogs_1.default(credentials, region);
                        if (!cmdParameters.tail) return [3 /*break*/, 4];
                        return [4 /*yield*/, logsClient.realtime(projectName, logStoreName, topic, query)];
                    case 3:
                        _b.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        from = moment_1.default().subtract(20, 'minutes').unix();
                        to = moment_1.default().unix();
                        startTime = cmdParameters.startTime, endTime = cmdParameters.endTime;
                        if (startTime && endTime) {
                            // 支持时间戳和其他时间格式
                            startTime = /^\d+$/g.test(startTime) ? startTime : startTime;
                            endTime = /^\d+$/g.test(endTime) ? endTime : endTime;
                            from = new Date(startTime).getTime() / 1000;
                            to = new Date(endTime).getTime() / 1000;
                        }
                        else {
                            // 20 minutes ago
                            this.logger.warn('By default, find logs within 20 minutes...\n');
                        }
                        keyword = cmdParameters.keyword, type = cmdParameters.type, requestId = cmdParameters.requestId;
                        queryErrorLog = type === 'failed';
                        return [4 /*yield*/, logsClient.history(projectName, logStoreName, from, to, topic, query, keyword, queryErrorLog, requestId)];
                    case 5:
                        historyLogs = _b.sent();
                        logsClient.printLogs(historyLogs);
                        _b.label = 6;
                    case 6: return [2 /*return*/, {
                            Properties: inputs.props,
                        }];
                }
            });
        });
    };
    __decorate([
        core_1.HLogger(constant_1.CONTEXT),
        __metadata("design:type", Object)
    ], Logs.prototype, "logger", void 0);
    return Logs;
}());
exports.default = Logs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNEY7QUFDNUYsa0RBQTRCO0FBRTVCLGdFQUEwQztBQUMxQyx1Q0FBMkM7QUFHM0M7SUFBQTtJQW9FQSxDQUFDO0lBakVPLG1CQUFJLEdBQVYsVUFBVyxNQUFlOzs7Ozs7O3dCQUNsQixJQUFJLEdBQUc7NEJBQ1gsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQzs0QkFDekIsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLFNBQVMsQ0FBQzs0QkFDaEMsb0NBQW9DOzRCQUNwQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTt5QkFDNUYsQ0FBQzt3QkFDSSxRQUFRLEdBQWtCLG1CQUFZLENBQUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQywrQkFBNkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUcsQ0FBQyxDQUFDO3dCQUUzRSxVQUFJLFFBQVEsQ0FBQyxJQUFJLDBDQUFFLElBQUksRUFBRTs0QkFDdkIsV0FBSSxDQUFDLGVBQUksQ0FBQyxDQUFDOzRCQUNYLHNCQUFPO3lCQUNSO3dCQUV5QixxQkFBTSxvQkFBYSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUE7NEJBQWhELHFCQUFNLFNBQTBDLEVBQUE7O3dCQUE5RCxXQUFXLEdBQUcsU0FBZ0Q7d0JBQzlELFVB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