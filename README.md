![Screenshot 2023-12-27 at 6 39 22 PM](https://github.com/MuskanSingla18/RoamRadar/assets/76451999/b3d6ae66-8554-4ff0-87cd-dfd48becf22d)
# RoamRadar

This project, named RoamRadar, is a location-based web application designed to enhance travel experiences by providing users with a comprehensive guide to nearby restaurants, hotels, and attractions. Leveraging Google Maps API for geolocation and map rendering, alongside the Rapid API from Travel Advisor for detailed place information, RoamRadar allows users to explore and discover points of interest in their vicinity. The application features a dynamic map interface with zoom-in and zoom-out capabilities, accompanied by a responsive list view that showcases relevant details about establishments. 

[Live Demo](https://roam-radar.vercel.app/)

![Screenshot 2023-12-27 at 6 39 22 PM](https://github.com/MuskanSingla18/RoamRadar/assets/76451999/b3d6ae66-8554-4ff0-87cd-dfd48becf22d)
## Table of Contents
- [Installation](#installation)
- [Technologies Used](#technologies-used)
- [Features](#features)
- [Project Structure](#project-structure)
- [API Integration](api-integration)
  - [Google Map API](google-map-api)
  - [Rapid API - Travel Advisor](rapid-api)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/travel-advisor.git
2. Navigate to the project directory
   ```bash
   cd travel-advisor
3. Install dependencies
   ```bash
   npm install
4. Create a .env file in the root directory with your API keys
   ```bash
   REACT_APP_GOOGLE_MAPS_API_KEY=your-google-maps-api-key
   REACT_APP_RAPID_API_KEY=your-rapid-api-key
5. Start the development server
   ```bash
   npm start

## Technologies Used

  React
  Material-UI
  Google Maps API
  Travel Advisor API (Rapid API)
  
## Fetures

  * Search Location: Enter a location to search for restaurants, hotels, and attractions.
  * Interactive Map: Explore the area with an interactive Google Map, featuring zoom in and zoom out functionality.
  * List View: View a list of restaurants, hotels, and attractions along with essential details.
  * Markers: Markers on the map indicate the location of each place in the list.
  * Filter by Rating: Filter places based on user ratings.
  * Theme Toggle: Switch between light and dark themes.

## Project Structure

The project follows a modular structure:

  * src/components: React components for different sections (Header, Map, List, etc.).
  * src/api: Functions to interact with external APIs.
  * src/App.js: Main application component.

## API Integration

### Google Map API

1. Embed dynamic and interactive maps using the Google Maps API and npm package.
   ```bash
   npm install google-map-react
2. Utilize geocoding to convert addresses into geographic coordinates.
    ```bash
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } });

### Rapid API - Travel Advisor

1. Fetch Location Details
   ```bash
     const locationDetails = await fetch(
    `https://travel-advisor.p.rapidapi.com/details?location_id=${locationId}`,
      {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
          'X-RapidAPI-Key': 'YOUR_API_KEY',
        },
      }
     );
    const data = await locationDetails.json();


## Usage

RoamRadar caters to a diverse range of use cases, serving as a handy tool for travelers and explorers alike. Tourists can efficiently plan their itineraries by visualizing nearby attractions on the map, reading reviews, and making informed decisions about where to dine or stay. Locals can also benefit from RoamRadar by discovering hidden gems and popular spots within their city. The filtering functionality based on ratings allows users to tailor their experience, ensuring they find establishments that meet their preferences. Whether someone is looking for a cozy café, a top-rated restaurant, or a highly-rated hotel, RoamRadar simplifies the process of discovering and navigating through various points of interest, making every journey more enjoyable and memorable.

  1. Enter a location in the search bar.
  2. Explore the map to find nearby places.
  3. Filter places by ratings using the provided dropdown.
  4. Toggle between light and dark themes using the theme toggle button.

## Contributing
Contributions are welcome! Feel free to open issues or pull requests.
