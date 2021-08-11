import React from 'react'
import Slide from '@material-ui/core/Slide'
import { Box } from '@material-ui/core'

export const CreateAccount : React.FC = () => {
    return (
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
            <Box>
                CreateAccount
            </Box>
        </Slide>
        
    )
}