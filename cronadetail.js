const { error } = require("console");
const request = require("request");
const cheerio = require("cheerio");
request("https://www.worldometers.info/coronavirus/", callback);


                //err-> agr koy be error hogi to is ke ander aa jyagi
function callback(err, res, body) {  //body -> ke ander puri html file de daga
    if (err) {
        console.log("error", err);
    } else {
        handelHtml(body);
    }
}
function handelHtml(html) {
    let selecTool = cheerio.load(html);
    let cronaStatus = selecTool(".maincounter-number");

    let totalCase = selecTool(cronaStatus[0]).text();
    console.log("total case  ->" + totalCase);

    let totalDeth = selecTool(cronaStatus[1]).text();
    console.log("total Deth ->" + totalDeth);

    let totalRecovery = selecTool(cronaStatus[2]).text();
    console.log("total Recovery ->" + totalRecovery);
}