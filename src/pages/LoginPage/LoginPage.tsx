import React, { useState } from 'react'
import { Box, Typography, TextField, InputAdornment, FormControlLabel, Checkbox, withStyles, Button, Link, Divider } from '@material-ui/core'
import { styles } from './LoginPage.style'
import { PersonOutline, Lock, PersonSharp } from '@material-ui/icons'

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
            <Typography className={useStyles.label_login}>
                Login
            </Typography>
            <form className={useStyles.formGroup}>
                <TextField placeholder="Email" variant="outlined" className={useStyles.textField} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                             <PersonOutline />
                        </InputAdornment>
                    )
                }} />

                <TextField type="password" placeholder="Senha" variant="outlined"  className={useStyles.textField} InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Lock />
                        </InputAdornment>
                    )
                }}/>
            </form>
            <Box className={useStyles.loginoptions}>
                <FormControlLabel control={
                    <CheckBoxStyle />
                } label="Lembrar-me" />
            </Box>

            <Button variant="contained" color="primary" className={useStyles.btnlogar}>Entrar</Button>
            <Typography className={useStyles.noncad}>Ainda não é cadastrado? Clique aqui</Typography>
            <Divider variant="fullWidth" className={useStyles.dividerstyle} />
            
        </Box>
    )
}