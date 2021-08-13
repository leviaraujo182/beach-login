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
    }
})