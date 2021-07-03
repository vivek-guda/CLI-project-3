const axios = require("axios");
const chalk = require("chalk");

var forecast = (address) => {
  const url = `http://api.weatherstack.com/current?access_key=86aefb32873e5230709314c554668169&query=${encodeURIComponent(
    address
  )}&limit=1`;
  axios
    .get(url)
    .then((res) => {
      let data = res.data;
      if (data.error) {
        console.log(chalk.red("Please enter a valid name"));
      } else {
        console.log(
          chalk.green("Location : ") +
            data.location.name +
            ", " +
            data.location.region +
            ", " +
            data.location.country
        );
        console.log(
          chalk.green("Weather description : ") +
            data.current.weather_descriptions[0]
        );
        console.log(
          chalk.green("Temperature : ") + data.current.temperature + " C"
        );
        console.log(
          chalk.green("Feels like : ") + data.current.feelslike + " C"
        );
      }
    })
    .catch(() => {
      console.log(
        chalk.red(
          "Couldn't connect to the weather server. Please try again later"
        )
      );
    });
};

module.exports = forecast;
