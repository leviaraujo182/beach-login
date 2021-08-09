import React from 'react';
import { Routes } from 'Router'
import { Box, ThemeProvider } from '@material-ui/core'
import { styles } from './App.style'
import { BgContent } from 'components/BgContent'
import { mainTheme } from '_configs/themes'

function App() {
  const useStyles = styles()
  return (
    <Box className={useStyles.contentmain}>

      <Box className={useStyles.contentleft}>
        <BgContent />
      </Box>

      <Box className={useStyles.contentright}>
        <ThemeProvider theme={mainTheme}>
          <Routes />
        </ThemeProvider> 
      </Box>
      
    </Box>
  );
}

export default App;
