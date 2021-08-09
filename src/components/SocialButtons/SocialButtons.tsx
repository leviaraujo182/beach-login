import React from 'react'
import { Box, Button } from '@material-ui/core'
import { styles } from './SocialButtons.style'


export const SocialButtons : React.FC = () => {
    const useStyles = styles()
    return (
        <Box>
            <ul className={useStyles.listopts}>
                <li className={useStyles.listitem}>
                    <Button variant='outlined' className={useStyles.buttonsocial}>Facebook</Button>
                </li>

                <li className={useStyles.listitem}>
                    <Button variant='outlined' className={useStyles.buttonsocial}>Instagram</Button>
                </li>

                <li className={useStyles.listitem}>
                    <Button variant='outlined' className={useStyles.buttonsocial} >Twitter</Button>
                </li>
            </ul>
        </Box>
    )
}