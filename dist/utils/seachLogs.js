"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var lodash_1 = __importDefault(require("lodash"));
var moment_1 = __importDefault(require("moment"));
var client_1 = __importDefault(require("./client"));
var constant_1 = require("../constant");
var utils_1 = require("./utils");
var SeachLogs = /** @class */ (function (_super) {
    __extends(SeachLogs, _super);
    function SeachLogs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slsClient = _this.buildSlsClient();
        return _this;
    }
    SeachLogs.prototype.printLogs = function (historyLogs) {
        var requestId = '';
        for (var _i = 0, historyLogs_1 = historyLogs; _i < historyLogs_1.length; _i++) {
            var item = historyLogs_1[_i];
            if (requestId !== item.requestId) {
                this.logger.log('\n');
                requestId = item.requestId;
            }
            this.logger.log(item.message);
        }
    };
    /**
     * 过滤日志信息
     */
    SeachLogs.prototype.filterByKeywords = function (logsList, _a) {
        if (logsList === void 0) { logsList = []; }
        var _b = _a.requestId, requestId = _b === void 0 ? '' : _b, _c = _a.keyword, keyword = _c === void 0 ? '' : _c, queryErrorLog = _a.queryErrorLog;
        var logsClone = lodash_1.default.cloneDeep(logsList);
        if (requestId) {
            logsClone = lodash_1.default.filter(logsClone, function (value) { return value.requestId === requestId; });
        }
        if (keyword) {
            var requestIds_1 = [];
            lodash_1.default.forEach(logsClone, function (value) {
                var curRequestId = value.requestId;
                if (value.message.includes(keyword) && curRequestId && !requestIds_1.includes(curRequestId)) {
                    requestIds_1.push(curRequestId);
                }
            });
            logsClone = lodash_1.default.filter(logsClone, function (value) { return requestIds_1.includes(value.requestId); });
        }
        if (queryErrorLog) {
            var requestIds_2 = [];
            lodash_1.default.forEach(logsClone, function (value) {
                var curRequestId = value.requestId;
                var curMessage = value.message;
                var isError = curMessage.includes(' [ERROR] ') || curMessage.includes('Error: ');
                if (isError && curRequestId && !requestIds_2.includes(curRequestId)) {
                    requestIds_2.push(curRequestId);
                }
            });
            logsClone = lodash_1.default.filter(logsClone, function (value) { return requestIds_2.includes(value.requestId); });
        }
        return logsClone;
    };
    /**
     * 获取日志
     */
    SeachLogs.prototype.getLogs = function (requestParams, tabReplaceStr) {
        if (tabReplaceStr === void 0) { tabReplaceStr = ''; }
        return __awaiter(this, void 0, void 0, function () {
            var count, xLogCount, xLogProgress, result, _loop_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.logger.debug("get logs params: " + JSON.stringify(requestParams));
                        xLogProgress = 'Complete';
                        result = [];
                        _loop_1 = function () {
                            var response, body, requestId;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            _this.slsClient.getLogs(requestParams, function (error, data) {
                                                if (error) {
                                                    reject(error);
                                                }
                                                resolve(data);
                                            });
                                        })];
                                    case 1:
                                        response = _a.sent();
                                        body = response.body;
                                        if (lodash_1.default.isEmpty(body)) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        count = lodash_1.default.keys(body).length;
                                        xLogCount = response.headers['x-log-count'];
                                        xLogProgress = response.headers['x-log-progress'];
                                        result = lodash_1.default.concat(result, lodash_1.default.values(body).map(function (cur) {
                                            var currentMessage = cur.message;
                                            var found = currentMessage.match('(\\w{8}(-\\w{4}){3}-\\w{12}?)');
                                            if (!lodash_1.default.isEmpty(found)) {
                                                requestId = found[0];
                                            }
                                            if (currentMessage.includes('FC Invoke Start')) {
                                                requestId = currentMessage.replace('FC Invoke Start RequestId: ', '');
                                            }
                                            if (requestId) {
                                                requestId = lodash_1.default.trim(requestId);
                                            }
                                            return {
                                                requestId: requestId,
                                                timestamp: cur.__time__,
                                                time: moment_1.default.unix(cur.__time__).format('YYYY-MM-DD H:mm:ss'),
                                                message: currentMessage.replace(new RegExp(/(\r)/g), tabReplaceStr),
                                            };
                                        }, {}));
                                        return [2 /*return*/];
                                }
                            });
                        };
                        _a.label = 1;
                    case 1: return [5 /*yield**/, _loop_1()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        if (xLogCount !== count && xLogProgress !== 'Complete') return [3 /*break*/, 1];
                        _a.label = 4;
                    case 4: return [2 /*return*/, result];
                }
            });
        });
    };
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
    SeachLogs.prototype.history = function (projectName, logStoreName, from, to, topic, query, keyword, queryErrorLog, requestId) {
        return __awaiter(this, void 0, void 0, function () {
            var logsList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getLogs({
                            from: from,
                            to: to,
                            projectName: projectName,
                            logStoreName: logStoreName,
                            topic: topic,
                            query: query,
                        })];
                    case 1:
                        logsList = _a.sent();
                        return [2 /*return*/, this.filterByKeywords(logsList, { keyword: keyword, requestId: requestId, queryErrorLog: queryErrorLog })];
                }
            });
        });
    };
    /**
     * 获取实时日志
     * @param {*} projectName
     * @param {*} logStoreName
     * @param {*} topic
     * @param {*} query
     */
    SeachLogs.prototype.realtime = function (projectName, logStoreName, topic, query) {
        return __awaiter(this, void 0, void 0, function () {
            var timeStart, timeEnd, times, consumedTimeStamps, _loop_2, this_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        times = 1800;
                        consumedTimeStamps = [];
                        _loop_2 = function () {
                            var pulledlogs, showTimestamp, notConsumedLogs;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, utils_1.sleep(1000)];
                                    case 1:
                                        _a.sent();
                                        times -= 1;
                                        timeStart = moment_1.default().subtract(10, 'seconds').unix();
                                        timeEnd = moment_1.default().unix();
                                        this_1.logger.debug("realtime: " + times + ", start: " + timeStart + ", end: " + timeEnd);
                                        return [4 /*yield*/, this_1.getLogs({
                                                projectName: projectName,
                                                logStoreName: logStoreName,
                                                topic: topic,
                                                query: query,
                                                from: timeStart,
                                                to: timeEnd,
                                            })];
                                    case 2:
                                        pulledlogs = _a.sent();
                                        if (lodash_1.default.isEmpty(pulledlogs)) {
                                            return [2 /*return*/, "continue"];
                                        }
                                        showTimestamp = '';
                                        notConsumedLogs = lodash_1.default.filter(pulledlogs, function (data) {
                                            var timestamp = data.timestamp;
                                            if (consumedTimeStamps.includes(timestamp)) {
                                                return showTimestamp === timestamp;
                                            }
                                            showTimestamp = data.timestamp;
                                            consumedTimeStamps.push(data.timestamp);
                                            return true;
                                        });
                                        this_1.printLogs(notConsumedLogs);
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _a.label = 1;
                    case 1:
                        if (!(times > 0)) return [3 /*break*/, 3];
                        return [5 /*yield**/, _loop_2()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.HLogger(constant_1.CONTEXT),
        __metadata("design:type", Object)
    ], SeachLogs.prototype, "logger", void 0);
    return SeachLogs;
}(client_1.default));
exports.default = SeachLogs;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhY2hMb2dzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlYWNoTG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFDekQsa0RBQXVCO0FBQ3ZCLGtEQUE0QjtBQUM1QixvREFBOEI7QUFDOUIsd0NBQXNDO0FBQ3RDLGlDQUFnQztBQVdoQztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQTJNQztRQTFNQyxlQUFTLEdBQUcsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztJQTBNcEMsQ0FBQztJQXZNQyw2QkFBUyxHQUFULFVBQVUsV0FBa0I7UUFDMUIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBRW5CLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQU0sSUFBSSxvQkFBQTtZQUNiLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFnQixHQUF4QixVQUF5QixRQUFhLEVBQUUsRUFBK0M7UUFBOUQseUJBQUEsRUFBQSxhQUFhO1lBQUksaUJBQWMsRUFBZCxTQUFTLG1CQUFHLEVBQUUsS0FBQSxFQUFFLGVBQVksRUFBWixPQUFPLG1CQUFHLEVBQUUsS0FBQSxFQUFFLGFBQWEsbUJBQUE7UUFDbkYsSUFBSSxTQUFTLEdBQUcsZ0JBQUMsQ0FBQyxTQUFTLENBQUMsUUFB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