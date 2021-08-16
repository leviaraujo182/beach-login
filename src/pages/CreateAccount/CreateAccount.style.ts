import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    main: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },

    contentmid: {
        width: '70%'
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
        color: '#999999'
    },

    termos: {
        marginLeft: 5,
        textDecoration: 'none',
        color: '#c38d25',
    },

    createaccount: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 300
    }
})