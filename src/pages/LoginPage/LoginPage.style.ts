import { makeStyles } from '@material-ui/core'
import bg from '_assets/images/bg.jpg'

const padding = 16

export const styles = makeStyles({
    main: {
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: padding,
        paddingRight: padding,
        flexDirection: 'column'
    },

    label_login: {
        fontSize: 32,
        fontWeight: 500,
        textTransform: 'uppercase',
        marginBottom: 15
    },

    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        width: '70%'
    },

    textField: {
        marginTop: 20,
        width: '100%',
        
        "& .MuiOutlinedInput-root": {
            borderRadius: 5
        }
    },

    loginoptions: {
        display: 'flex',
        width: '70%',
        justifyContent: 'space-between',
    },
    btnlogar: {
        width: '70%',
        color: '#FFF',
    },

    noncad: {
        marginTop: 5,
        fontSize: 14
    },

    dividerstyle: {
        width: '60%',
        marginTop: 10,
        marginBottom: 10,
        height: 1
    }


})