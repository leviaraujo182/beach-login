import React, { useState } from 'react'
import { Box, Typography, TextField, InputAdornment, FormControlLabel, Checkbox, withStyles, Button, Link, Divider } from '@material-ui/core'
import { styles } from './LoginPage.style'
import { PersonOutline, Lock, PersonSharp } from '@material-ui/icons'
import { SocialLogin } from 'components/SocialLogin'

const CheckBoxStyle = withStyles({
    root: {
        "&$checked": {
            color: '#C38D25'
        }
    },

    checked: {}
})(Checkbox)

export const LoginPage : React.FC = () => {
    const [stateIconEmail, setStateIconEmail] = useState(false)


    const useStyles = styles()
    return (
        <Box className={useStyles.main}>
            <Box className={useStyles.content_center}>
                <Box className={useStyles.contentforms}>
                    <TextField variant="outlined" placeholder="Email" className={useStyles.form} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <PersonSharp className={useStyles.inputicons}/>
                            </InputAdornment>
                        )
                    }}/>
                    <TextField type="password" variant="outlined" placeholder="Senha" className={useStyles.form} InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock className={useStyles.inputicons}/>
                            </InputAdornment>
                        )
                    }}/>

                    <Box className={useStyles.subcontentform}>
                        <FormControlLabel control={<Checkbox color="primary" />} label={
                            <Typography style={{ color: '#999999' }}>
                                Lembrar-me
                            </Typography>
                        }/>
                        <Button variant="contained" color="primary" className={useStyles.btnentrar}>Entrar</Button>
                    </Box>

                    <Divider variant="fullWidth" className={useStyles.divider} />
                    <Typography style={{ color : '#999999' }}>Continue utilizando as redes sociais</Typography>
                    <SocialLogin />
                </Box>
            </Box>
            
        </Box>
    )
}