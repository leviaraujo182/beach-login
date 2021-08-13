import React from 'react'
import Slide from '@material-ui/core/Slide'
import { Box, Button } from '@material-ui/core'
import { motion } from 'framer-motion'
import { useStyles } from './CreateAccount.style'
import { Input } from 'components/Input'
import { PersonSharp, Lock, AlternateEmail, LocalPhone, ArrowBack } from '@material-ui/icons'
import { Link } from 'react-router-dom'

export const CreateAccount : React.FC = () => {
    const style = useStyles()
    return (
        <motion.div animate={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: '100%' }}  exit={{ x: '100%'}}>
            <Box className={style.main}>
                <Box className={style.contentheader}>
                    <Link to="/">
                        <Button startIcon={<ArrowBack className={style.arrowback}/>} variant="text" style={{ fontSize: 17 }}>Voltar</Button>
                    </Link>
                </Box>
                <Box className={style.contentmid}>
                    <Input name="Nome *" icon={<PersonSharp />}/>
                    <Input name="Senha *" type="password" icon={<Lock />}/>
                    <Input name="Email *" type="email" icon={<AlternateEmail />}/>
                    <Input name="Telefone" type="email" icon={<LocalPhone />}/>
                </Box>
            </Box>
        </motion.div>
     
        
    )
}