import React from 'react'
import { useStyles } from './Input.style'
import { TextField, InputAdornment } from '@material-ui/core'


interface InputProps {
    name: string,
    icon?: any,
    type?: string 
}

export const Input : React.FC<InputProps> = ({name, icon, type}) => {
    const style = useStyles()
    return <TextField variant="outlined" type={type} placeholder={name} className={style.input} InputProps={{
        startAdornment: (
            <InputAdornment position="start" className={style.adormentstyle}>
                {icon}
            </InputAdornment>
        )
    }}/>
}