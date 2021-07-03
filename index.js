const forecast = require("./forecast");
const readlineSync = require("readline-sync");

var address = readlineSync.question(
  "Enter the name of a valid place to get the weather forecast : "
);

forecast(address);
