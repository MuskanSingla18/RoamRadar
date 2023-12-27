import React from 'react';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme, ThemeProvider } from '@mui/material/styles';

const ThemeToggleButton = ({ toggleTheme }) => {
  const theme = useTheme();

  return (
    <IconButton onClick={toggleTheme} color="inherit" sx={{ marginRight: 1 }}>
      {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
};

export default ThemeToggleButton;
