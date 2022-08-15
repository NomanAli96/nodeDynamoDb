var AWS = require("aws-sdk");
let awsConfig = {};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "Preferences",
        Key: {
            "Id": "91adfae6-c268-4d31-85bb-756a0332f021"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log("users::fetchOneByKey::error - " + JSON.stringify(err, null, 2));
        }
        else {
            console.log("users::fetchOneByKey::success - " + JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();