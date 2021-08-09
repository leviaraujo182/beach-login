import React from 'react'
import { Box, Typography } from '@material-ui/core'
import { styles } from './BgContent.style'
import { SocialButtons } from 'components/SocialButtons'

export const BgContent : React.FC = () => {
    const useStyles = styles()
    return (
        <Box className={useStyles.main}>
            <Box className={useStyles.bgimg}>
                <Box className={useStyles.solidfilter}></Box>
                <Box className={useStyles.contentimg}>
                    <Box className={useStyles.content_texts}>
                        <label className={useStyles.textimg}>Sunset</label>
                        <label className={useStyles.subtextimg}>Beach</label>
                    </Box>

                    <Box className={useStyles.textbottom}>
                        Acesse nossas redes sociais e conheça mais sobre a gente
                    </Box>

                    <Box>
                        <SocialButtons />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}