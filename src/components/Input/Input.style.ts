import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    input: {
        width: '100%',
        paddingTop: 5,
        outline: 'none',
        paddingBottom: 5,

        "& .MuiOutlinedInput-input": {
            height: 14,
            borderRadius: 0,
            outline: 'none',
            

        },

        "& .MuiOutlinedInput-root": {
            borderRadius: 0,
            outline: 'none',
            backgroundColor: '#F5F5F5'
        },
    }  
})