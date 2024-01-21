const express = require("express");
const axios = require("axios");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

// Serve the public folder as static files
app.use(express.static("public"));

// Render the index template with default values for weather and error
app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null});
});

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  const apiKey = "a3616aba692f2fb6881ffc95992c16c8";

  const OpenWeatherAPIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let airquality;
  let weather;
  let uvData;
  let error = null;
  try {
    // OpenWeather API
    const response = await axios.get(OpenWeatherAPIUrl);
    weather = response.data;
    // IQAir API
    const response2 = await axios.get('http://api.airvisual.com/v2/nearest_city?lat='+weather.coord.lat+'&lon='+weather.coord.lon+'&key=3ff54967-3ac4-4446-b5ad-4a0544bb195f')
    airquality = response2.data;

    var myHeaders = new Headers();
    myHeaders.append("x-access-token", "openuv-f9a41qrlrnry8jm-io");
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    //OpenUV API
    fetch("https://api.openuv.io/api/v1/uv?lat="+weather.coord.lat+"&lng="+weather.coord.lon+"&alt=100&dt=", requestOptions)
    .then(response => {
      return response.text();
    })
    .then(result => {
      uvData = JSON.parse(result);
      res.render("index", { weather, error, uvData, airquality });
    })
    .catch(error => {
      console.error('error', error);
      // Handle errors gracefully, e.g., provide a default message to the user
  });
  } catch (error) {
    weather = null;
    error = "Error, Please try again";
    res.render("index", { weather, error, uvData, airquality });
  }
});

// Start the server and listen on port 3000 or the value of the PORT environment variable
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});