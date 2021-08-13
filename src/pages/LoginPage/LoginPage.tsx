import React, { useState } from 'react'
import { Box, Typography, TextField, InputAdornment, FormControlLabel, Checkbox, withStyles, Button, Link, Divider } from '@material-ui/core'
import { styles } from './LoginPage.style'
import { PersonOutline, Lock, PersonSharp, CheckCircleOutline, CheckCircle, RadioButtonUnchecked } from '@material-ui/icons'
import { SocialLogin } from 'components/SocialLogin'
import { Link as LinkRouter } from 'react-router-dom'
import { motion } from 'framer-motion'

export const LoginPage : React.FC = () => {
    const [stateIconEmail, setStateIconEmail] = useState(false)


    const useStyles = styles()
    return (
        <motion.div exit={{ x: '100%' }} initial={{ x: '100%' }} animate={{ x: 0 }}>
            <Box className={useStyles.main}>
                <Box className={useStyles.content_center}>
                    <Box className={useStyles.contentforms}>
                        <label className={useStyles.labellogin}>Login</label>
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
                            ),
                        }}/>

                        <Box className={useStyles.subcontentform}>
                            <FormControlLabel control={<Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} color="primary" />} label={
                                <Typography className={useStyles.textremember}>
                                    Lembrar-me
                                </Typography>
                            }/>
                            <Button variant="contained" color="primary" className={useStyles.btnentrar}>Entrar</Button>
                        </Box>

                        <Divider variant="fullWidth" className={useStyles.divider} />
                        <Typography className={useStyles.textlogsocial}>Continue utilizando as redes sociais</Typography>
                        <SocialLogin />
                    </Box>
                        
                </Box>

                <Box className={useStyles.footer}>
                    <Typography className={useStyles.no_account}>Ainda não possui conta?</Typography> 
                    
                        <a href="#" className={useStyles.clickhere}>
                        <LinkRouter to="/createAccount">
                            <Typography className={useStyles.clickhere}>Clique aqui</Typography>
                        </LinkRouter>
                        </a>
                    
                </Box>
                
            </Box>
        </motion.div>
    )
}