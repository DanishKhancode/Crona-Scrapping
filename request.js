const { error } = require("console");
const request = require("request");
request("https://www.worldometers.info/coronavirus/", callback);


                //err-> agr koy be error hogi to is ke ander aa jyagi
function callback(err, res, body) {  //body -> ke ander puri html file de daga
    console.log("error", err);
    console.log(body);
}