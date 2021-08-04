import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { styles } from './BgContent.style'

export const BgContent : React.FC = () => {
    const useStyles = styles()
    return (
        <Box className={useStyles.main}>
            <Box className={useStyles.bgimg}>
                <Box className={useStyles.solidfilter}></Box>
                <Box className={useStyles.contentimg}>
                    <Box className={useStyles.content_texts}>
                        <Typography className={useStyles.textimg}>Sunset</Typography>
                        <Typography className={useStyles.subtextimg}>Beach</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}