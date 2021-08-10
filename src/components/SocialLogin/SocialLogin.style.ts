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
        background: '#3b5998',
        color: 'white',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,

        "&:hover": {
            backgroundColor: '#3b5998'
        }
    },

    listitem_twitter: {
        textTransform: 'capitalize',
        background: '#00acee',
        color: 'white',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,

        "&:hover": {
            backgroundColor: '#00acee'
        }
    },

    listitem_google: {
        textTransform: 'capitalize',
        background: '#de5246',
        color: 'white',
        fontSize: 12,
        margineLeft:6,
        marginRight: 6,
        borderRadius: 20,

        "&:hover": {
            backgroundColor: '#de5246'
        }
    },

    iconbuttons: {
        width: 15,
        height: 15
    }




})