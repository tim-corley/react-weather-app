<!-- PROJECT HEADER -->
<br />
<p align="center">
  <a href="https://nhl.com">
    <img src="public/weathericon.png" alt="Logo" width="100" height="100">
  </a>

  <h2 align="center">React Weather App</h2>

  <p align="center">
    Get current weather information for your city.
    <br />
    <br />
    <a href="https://github.com/tim-corley/react-weather-app/issues">Report Bug</a>
  </p>
    <div align="center">
    <h3>Built with:<h3>
      <a href="https://reactjs.org/docs/getting-started.html">
    <img src="public/react.svg" alt="Logo" width="60" height="60">
  </a>
    <a style="margin-left: 50px; margin-right: 50px" href="https://redux.js.org/api/api-reference)">
    <img src="public/redux.svg" alt="Logo" width="60" height="60">
  </a>
      <a  href="https://tailwindcss.com/docs">
    <img src="public/tailwindcss.svg" alt="Logo" width="60" height="60">
  </a>
  </div>
</p>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
        <li>
      <a href="#dev-notes">Dev Notes</a>
      <ul>
        <li><a href="#api">API</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project

This is a pretty simple weather web appliation that fetches data via the OpenWeather API for a given city. 

### Built With

* [React](https://reactjs.org/docs/getting-started.html)
* [Redux](https://redux.js.org/api/api-reference)
* [Tailwind](https://tailwindcss.com/docs)
* [OpenWeather](https://openweathermap.org/api)
<!-- GETTING STARTED -->
## Getting Started

Follow the steps below to get a local development instance up & running.

### Prerequisites

Some things you'll need in order to get going...

* [OpenWeather API Key](https://openweathermap.org/api) - reate an account and generate a new key. Place this key in a `env.local` file at project root. 

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/tim-corley/react-weather-app.git
   ```
2. Install packages
   ```sh
   yarn install
   ```
3. Start the development server
   ```sh
   yarn dev
   ``` 

### Deployment

N/A

### API

This application leverages [OpenWeather's current weather data API](https://openweathermap.org/current)  

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.

<!-- CONTACT -->
## Contact

Tim Corley - [@tcor215](https://twitter.com/tcor215) - contact@tim-corley.dev
