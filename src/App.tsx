import React from 'react';
import { Routes } from 'Router'
import { Box } from '@material-ui/core'
import { styles } from './App.style'
import { BgContent } from 'components/BgContent'

function App() {
  const useStyles = styles()
  return (
    <Box className={useStyles.contentmain}>

      <Box className={useStyles.contentleft}>
        <BgContent />
      </Box>

      <Box className={useStyles.contentright}>
          <Routes />
      </Box>
      
    </Box>
  );
}

export default App;
