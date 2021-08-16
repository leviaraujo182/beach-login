import React from 'react'
import Slide from '@material-ui/core/Slide'
import { Box, Button, FormControlLabel, Checkbox, Typography } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useStyles } from './CreateAccount.style'
import { Input } from 'components/Input'
import { PersonSharp, Lock, AlternateEmail, LocalPhone, ArrowBack, CheckCircleOutline, CheckCircle, RadioButtonUnchecked  } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export const CreateAccount : React.FC = () => {
    const style = useStyles()
    return (
        <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: '100%' }}  exit={{ x: '100%'}} transition={{ type: 'just' }}>
            <Box className={style.main}>
                <Box className={style.contentheader}>
                    <Link to="/">
                        <Button startIcon={<ArrowBack className={style.arrowback}/>} variant="text" style={{ fontSize: 17 }}>Voltar</Button>
                    </Link>
                </Box>
                <Box className={style.contentmid}>
                    <Typography className={style.createaccount}>Criar Conta</Typography>
                    <Input name="Nome *" icon={<PersonSharp />}/>
                    <Input name="Senha *" type="password" icon={<Lock />}/>
                    <Input name="Repita a senha *" type="password" icon={<Lock />}/>
                    <Input name="Email *" type="email" icon={<AlternateEmail />}/>
                    <Input name="Telefone" type="email" icon={<LocalPhone />}/>
                    <FormControlLabel control={<Checkbox icon={<RadioButtonUnchecked />} checkedIcon={<CheckCircle />} color="primary" />} label={
                        <Box className={style.boxtermos}>
                            <Typography>Eu aceito e concordo com os</Typography>
                            <a href="#" className={style.termos}>
                                <Typography>termos de uso</Typography>
                            </a>
                        </Box>
                    }/>
                    <Box className={style.contentbutton}>
                        <Button variant="contained" color="primary" className={style.btnfinish}>
                            Finalizar Cadastro
                        </Button>
                    </Box>
                </Box>
            </Box>
        </motion.div>
     
        
    )
}