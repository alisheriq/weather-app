# Weather App using NodeJS

## Introduction
This Weather App is a Node.js application that provides real-time weather information based on the user's input city. It utilizes three different APIs to gather data - OpenWeatherMap for weather details, IQAir for air quality information, and OpenUV for UV index data. The application renders the information on a simple web page using the EJS templating engine.

## Table of Contents
- [Setup](#setup)
- [API Usage](#api-usage)
- [Design Decisions](#design-decisions)

## Setup
Follow these steps to set up and run the Weather App on your local machine:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/WeatherApp.git
    cd WeatherApp
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Obtain API Keys:**
    - OpenWeatherMap API Key: [OpenWeatherMap API](https://openweathermap.org/appid)
    - IQAir API Key: [IQAir API](https://www.iqair.com/air-quality-api)
    - OpenUV API Key: [OpenUV API](https://www.openuv.io/)

4. **Create a `.env` file in the root directory and add your API keys:**
    ```env
    OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
    IQAIR_API_KEY=your_iqair_api_key
    OPENUV_API_KEY=your_openuv_api_key
    ```

5. **Run the application:**
    ```bash
    npm start
    ```

6. **Open your browser and navigate to [http://localhost:3000](http://localhost:3000) to use the Weather App.**

## API Usage
The application uses three APIs to gather data:

- **OpenWeatherMap API:** Provides current weather data.
- **IQAir API:** Retrieves air quality information based on geographical coordinates.
- **OpenUV API:** Fetches UV index data based on geographical coordinates.

Make sure to replace the placeholder API keys in the `.env` file with your actual API keys.

## Design Decisions
### Technologies Used
- **Express.js:** Used as the web framework to handle HTTP requests and responses.
- **Axios:** A promise-based HTTP client for making API requests.
- **EJS:** A simple templating engine for rendering dynamic content on the web page.
- **Leaflet.js:** A JavaScript library for interactive maps.

### Code Structure
- **Server (`index.js`):** The main entry point that sets up the Express application, defines routes, and starts the server.
- **Views (`views/index.ejs`):** The EJS template for rendering weather information and the map.
- **Public (`public/`):** Static files like stylesheets and client-side JavaScript.
- **Environmental Variables (`.env`):** Used to store sensitive data such as API keys.

### APIs
- **OpenWeatherMap:** Provides essential weather data such as temperature, humidity, and wind speed.
- **IQAir:** Gives air quality information, including the Air Pollution Index (US).
- **OpenUV:** Provides UV index data and related information.

### User Interface
- **Search Form:** Allows users to input the city name to get real-time weather information.
- **Information Display:** Presents weather details, air quality, and UV index in a user-friendly format.
- **Map:** Utilizes Leaflet.js to display the location on the map using geographical coordinates.
