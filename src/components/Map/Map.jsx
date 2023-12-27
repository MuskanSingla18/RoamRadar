import React , {useEffect,useState} from "react";
import GoogleMapReact from 'google-map-react';
import { styled } from '@mui/system'; // Import styled from @mui/system
import { useMediaQuery, Paper, Typography } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import Rating from '@mui/material/Rating';

const MapContainer = styled('div')({
  marginTop: '30px',
  height: '85vh',
  width: '100%',
});

const MarkerContainer = ({ text,website }) => (
  <div
    style={{
      marginTop:'40px',
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      zIndex: 1,
      cursor: 'pointer',
    }}
     onClick={() => window.open(website, '_blank')}
  >
    <LocationOnOutlinedIcon color="primary" fontSize="large" />
    <Paper elevation={3} style={{ padding: '10px', width: '100px', textAlign: 'center' }}>
      <Typography variant="caption">{text}</Typography>
    </Paper>
  </div>
);

const PaperContainer = styled('Paper')({
  padding: '10px', 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  width: '100px',
  alignItems: 'center',
  textAlign: 'center',
});

const TypographyContainer = styled('Typography')({
  marginBottom: '8px',
});

const RatingContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',  // Align ratings and icon in the center
});

// const PointerContainer = styled('img')({
//   cursor: 'pointer',
//   maxWidth: '100%',
//   maxHeight: '100%',
//   position: 'absolute',
//   top: '-50%', // Adjust as needed
//   left: '-50%',
//   borderRadius: '4px', 
// });

const Map = ({setCoordinates, setBounds, coordinates , places , setChildClicked}) => {
  const isDesktop = useMediaQuery('(min-width:600px');

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (places?.length > 0) {
      setLoading(false);
    }
  }, [places]);

  useEffect(() => {
    setLoading(true);
  }, [coordinates]);

  return (
    <MapContainer>

      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API }} // Replace with your API key
        defaultCenter={coordinates}
        center={coordinates}
        defaultZoom={10}
        margin={[50, 50, 50, 50]}
        //options={''}
        onChange={(e) => {
          //console.log(e);
          setCoordinates({ lat: e.center.lat, lng: e.center.lng});
          setBounds({ ne : e.bounds.ne , sw: e.bounds.sw});
        }}
        onChildClick={(child) => setChildClicked(child)}
      >
           {places?.length > 0 &&
          places.map((place, i) => (
            place.latitude && place.longitude ? (
              <MarkerContainer
                key={i}
                lat={place.latitude}
                lng={place.longitude}
                text={place.name}
                website={place.website}
              />
            ) : null
          ))}
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;
