"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aliyun_sdk_1 = require("aliyun-sdk");
var Client = /** @class */ (function () {
    function Client(credentials, region) {
        this.region = region;
        this.credentials = credentials;
        this.accountId = credentials.AccountID;
        this.accessKeyID = credentials.AccessKeyID;
        this.accessKeySecret = credentials.AccessKeySecret;
        this.stsToken = credentials.SecurityToken;
    }
    Client.prototype.buildSlsClient = function () {
        return new aliyun_sdk_1.SLS({
            accessKeyId: this.accessKeyID,
            secretAccessKey: this.accessKeySecret,
            endpoint: "http://" + this.region + ".sls.aliyuncs.com",
            apiVersion: '2015-06-01',
        });
    };
    return Client;
}());
exports.default = Client;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NsaWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFpQztBQUdqQztJQVFFLGdCQUFZLFdBQXlCLEVBQUUsTUFBYztRQUNuRCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUUvQixJQUFJLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDdkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzNDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQztRQUNuRCxJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQUVELCtCQUFjLEdBQWQ7UUFDRSxPQUFPLElBQUksZ0JBQUcsQ0FBQztZQUNiLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsUUFBUSxFQUFFLFlBQVUsSUFBSSxDQUFDLE1BQU0sc0JBQW1CO1lBQ2xELFVBQVUsRUFBRSxZQUFZO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxhQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQyJ9