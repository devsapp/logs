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
                                                message: currentMessage.replace(new RegExp(/(\r)/g), tabReplaceStr)
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
                                        times = times - 1;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VhY2hMb2dzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL3NlYWNoTG9ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBeUQ7QUFDekQsa0RBQXVCO0FBQ3ZCLGtEQUE0QjtBQUM1QixvREFBOEI7QUFDOUIsd0NBQXNDO0FBQ3RDLGlDQUFnQztBQVdoQztJQUF1Qyw2QkFBTTtJQUE3QztRQUFBLHFFQTJNQztRQTFNQyxlQUFTLEdBQUcsS0FBSSxDQUFDLGNBQWMsRUFBRSxDQUFDOztJQTBNcEMsQ0FBQztJQXZNQyw2QkFBUyxHQUFULFVBQVUsV0FBa0I7UUFDMUIsSUFBSSxTQUFTLEdBQVcsRUFBRSxDQUFDO1FBRTNCLEtBQW1CLFVBQVcsRUFBWCwyQkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQTNCLElBQU0sSUFBSSxvQkFBQTtZQUNiLElBQUksU0FBUyxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN0QixTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLG9DQUFnQixHQUF4QixVQUF5QixRQUFhLEVBQUUsRUFBK0M7UUFBOUQseUJBQUEsRUFBQSxhQUFhO1lBQUksaUJBQWMsRUFBZCxTQUFTLG1CQUFHLEVBQUUsS0FBQSxFQUFFLGVBQVksRUFBWixPQUFPLG1CQUFHLEVBQUUsS0FBQSxFQUFFLGFBQWEsbUJBQUE7UUFDbkYsSUFBSSxTQUFTLEdBQUcsZ0JBQUMsQ0FBQyxTQUFTLENBQUMsUUFB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