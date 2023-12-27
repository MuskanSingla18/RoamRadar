import React , {useState} from 'react';
import {Autocomplete} from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled,useTheme } from '@mui/system'; // Import styled from @mui/system
import ThemeToggleButton from '../ThemeToggle.js';

const HeaderContainer = styled(AppBar)(({ theme }) => ({
  position: 'static',
  backgroundColor: theme.palette.mode === 'dark' ? '#02367B' : '#0497C7', // Set the background color based on the theme
  transition: 'background-color 300ms ease-in-out', // Add a transition effect for smooth color change
}));

const ToolbarContainer = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const TitleTypography = styled(Typography)({
  display: 'none',
  '@media (min-width:600px)': {
    display: 'block',
  },
});

const ExploreTypography = styled(Typography)({
  display: 'none',
  '@media (min-width:600px)': {
    display: 'block',
  },
});

const SearchContainer = styled('div')({
  position: 'relative',
  borderRadius: '4px',
  backgroundColor: '#fff',
  '&:hover': {
    backgroundColor: '#fff',
  },
  marginRight: '8px',
  marginLeft: 0,
  width: '100%',
  '@media (min-width:600px)': {
    marginLeft: '12px',
    width: 'auto',
  },
});

const SearchIconContainer = styled('div')({
    padding: '10px', // Adjusted padding for better visibility
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color : 'Black'
  });

const InputBaseContainer = styled(InputBase)({
  root: {
    color: 'inherit',
  },
  input: {
    padding: '8px',
    paddingLeft: 'calc(1em + 32px)',
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    width: '100%',
    '@media (min-width:600px)': {
      width: '20ch',
    },
  },
});

const Logo = styled('img')({
  width: '50px',
  height: '48px',
  marginRight: '8px',
});

const Header = ({toggleTheme,setCoordinates}) => {
  
  const theme = useTheme();
  const [autocomplete,setautocomplete] = useState(null);

  const onLoad = (autoC) => setautocomplete(autoC);
  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
  
    if (place.geometry && place.geometry.location) {
      const lat = place.geometry.location.lat();
      const lng = place.geometry.location.lng();
      setCoordinates({ lat, lng });
    } else {
      console.error("Invalid place data:", place);
    }
    
  }
  return (
    <HeaderContainer theme={theme}>
      <ToolbarContainer>
      <Box display="flex" alignItems="center">
          <Logo src="/logo.png" alt="Logo" />
          <TitleTypography variant="h5">RoamRadar</TitleTypography>
        </Box>
        <Box display="flex">
          <ThemeToggleButton toggleTheme={toggleTheme}/>
          <ExploreTypography variant="h6">Explore New Places</ExploreTypography>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
          <SearchContainer>
            <SearchIconContainer>
              <SearchIcon />
            </SearchIconContainer>
            <InputBaseContainer placeholder="Search..." />
          </SearchContainer>
          </Autocomplete>
        </Box>
      </ToolbarContainer>
    </HeaderContainer>
  );
};

export default Header;
