import { Typography, Box, IconButton, Button, SvgIcon, Icon } from '@material-ui/core'
import React from 'react'
import { useStyles } from './SocialLogin.style'
import Google from '_assets/images/google.svg'
import Facebook from '_assets/images/facebook.svg'
import Twitter from '_assets/images/twitter.svg'
import Google8 from '_assets/images/google8.svg'

export const SocialLogin : React.FC = () => {
    const styles = useStyles()
    return (
        <Box className={styles.list}>
            <Button variant="contained" className={styles.listitem_facebook} startIcon={
                <img src={Facebook} className={styles.iconbuttons}/>
            } >
                Facebook
            </Button>

            <Button variant="contained" className={styles.listitem_twitter} startIcon={
                <img src={Twitter} className={styles.iconbuttons}/>
            }>
                Twitter
            </Button>

            <Button variant="contained" className={styles.listitem_google} startIcon={
                <img src={Google} className={styles.iconbuttons}/>
            }>
                Google
            </Button>
        </Box>
    )
}