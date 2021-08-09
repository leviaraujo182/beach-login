import React from 'react'
import { Box, Button, IconButton } from '@material-ui/core'
import { styles } from './SocialButtons.style'
import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'


export const SocialButtons : React.FC = () => {
    const useStyles = styles()
    return (
        <Box>
            <ul className={useStyles.listopts}>
                <li className={useStyles.listitem}>
                    <IconButton color="primary" className={useStyles.iconbutton}>
                        <Facebook fontSize="large" />
                    </IconButton>
                </li>

                <li className={useStyles.listitem}>
                    <IconButton color="primary" className={useStyles.iconbutton}>
                        <Instagram fontSize="large" />
                    </IconButton>
                </li>

                <li className={useStyles.listitem}>
                    <IconButton color="primary" className={useStyles.iconbutton}>
                        <Twitter fontSize="large" />
                    </IconButton>
                </li>

                <li className={useStyles.listitem}>
                    <IconButton color="primary" className={useStyles.iconbutton}>
                        <YouTube fontSize="large" />
                    </IconButton>
                </li>
            </ul>
        </Box>
    )
}