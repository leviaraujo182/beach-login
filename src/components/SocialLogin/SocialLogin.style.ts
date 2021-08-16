import { makeStyles } from '@material-ui/core'

export const useStyles = makeStyles({
    list: {
        display: 'flex',
        width: '60%',
        justifyContent: 'center',
        marginTop: 3  
    },

    listitem: {
        listStyle: 'none',
    },

    listitem_facebook: {
        textTransform: 'capitalize',
        background: '#FFF',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,
        minWidth: '6rem',

        "&:hover": {
            backgroundColor: '#FFF'
        }
    },

    listitem_twitter: {
        textTransform: 'capitalize',
        background: '#FFF',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,
        minWidth: '6rem',

        "&:hover": {
            backgroundColor: '#FFF'
        }
    },

    listitem_google: {
        textTransform: 'capitalize',
        background: '#FFF',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,
        minWidth: '6rem',

        "&:hover": {
            backgroundColor: '#FFF'
        }
    },

    iconbuttons: {
        width: 15,
        height: 15
    },

    iconbuttons_facebook: {
        width: 25,
        height: 25,
        fill: '#4267B2'
    }





})