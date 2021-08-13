import React from 'react'
import Slide from '@material-ui/core/Slide'
import { Box } from '@material-ui/core'
import { motion } from 'framer-motion'

export const CreateAccount : React.FC = () => {
    const transition = {
        duration: 1,
        ease: [0.43, 0.13, 0.23, 0.96]
      };
    return (
        <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: '100%' }} transition={{  duration: 0.3 }} exit={{ x: '100%'}}>
            <Box style={{ width: '100%', height: '100vh', backgroundColor: 'red' }}>
                CreateAccount
            </Box>
        </motion.div>
     
        
    )
}