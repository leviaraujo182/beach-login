import { makeStyles } from '@material-ui/core'
import {Theme, createStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => createStyles({
    main: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        [theme.breakpoints.down("xs")]: {
            overflow: 'hidden'
        }
    },

    contentmid: {
        width: '70%',
        [theme.breakpoints.down("xs")]: {
            width: '90%'
        }
    },

    contentheader: {
        width: '100%',
        position: 'absolute',
        top: 15,
        marginLeft: 20
    },

    arrowback: {
        width: 25,
        height: 25,
    },

    contentbutton: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },

    btnfinish: {
        textTransform: 'capitalize',
        marginTop: 10,
        color: '#FFF',
        borderRadius: 20
    },

    boxtermos: {
        display: 'flex',
        color: '#999999',
        width: '100%'
    },

    termos: {
        marginLeft: 5,
        textDecoration: 'none',
        color: '#c38d25',
    },

    createaccount: {
        textAlign: 'center',
        fontSize: '2.5rem',
        fontWeight: 300
    },

    labelaceito: {
        fontFamily: 'Roboto',
        [theme.breakpoints.down("xs")]: {
            fontSize: '1rem'
        }
    },

    linktermos: {
        textDecoration: 'none'
    }
}))