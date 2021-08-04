import React from 'react'
import { Box } from '@material-ui/core'
import { styles } from './BgContent.style'

export const BgContent : React.FC = () => {
    const useStyles = styles()
    return (
        <Box className={useStyles.main}>
            <Box className={useStyles.bgimg}>
                sss
            </Box>
        </Box>
    )
}