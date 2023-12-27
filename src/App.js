
import './App.css';
import React , {useState , useEffect} from 'react';
import {ThemeProvider, createTheme,CssBaseline , Grid, ToggleButton, ToggleButtonGroup} from '@mui/material';
import Header from './components/Header/Header';
import Map from './components/Map/Map';
import List from './components/List/List';
import {getPlacesData} from './api';
import ThemeToggleButton from './components/ThemeToggle.js';

function App() {
  const [themeMode, setThemeMode] = useState('light');
  

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
    typography: {
      fontFamily: 'georgia',
    },
  });

  const [places,setPlaces] = useState([]);
  const [coordinates,setCoordinates] = useState();
  const [bounds,setBounds] = useState({});
  const [filteredPlaces,setFilteredPlaces] = useState([]);
  const [childClicked , setChildClicked] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const [type,setType] = useState('restaurants');
  const [rating,setRating] = useState('');

  useEffect(() => {
    const filteredPlaces = places.filter((place) => Number(place.rating) > rating);

    setFilteredPlaces(filteredPlaces);
  },[rating]);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
        setIsLoading(true);
        getPlacesData(type , bounds?.sw, bounds?.ne)
          .then((data) => {
            //console.log(data);
            setPlaces(data);
            setFilteredPlaces([]);
            setIsLoading(false);
          })
      
  }, [type,coordinates,bounds] );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <Header toggleTheme={toggleTheme} setCoordinates={setCoordinates}/>
      
      <Grid container spacing={3} style={{width: '100%'}}>
        <Grid item xs={12} md={4}>
          <List 
            places={filteredPlaces.length ? filteredPlaces : places}
            childClicked = {childClicked}
            isLoading = {isLoading}
            type={type}
            setType={setType}
            rating={rating}
            setRating={setRating}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates = {setCoordinates}
            setBounds = {setBounds}
            coordinates={coordinates}
            places={filteredPlaces.length ? filteredPlaces : places}
            setChildClick = {setChildClicked}
            />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;
