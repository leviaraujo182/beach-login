import { makeStyles } from '@material-ui/core'
import bg from '_assets/images/bg.jpg'
import {Theme, createStyles } from '@material-ui/core/styles'


const padding = 16

export const styles = makeStyles((theme: Theme) => createStyles({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingRight: 16,
        paddingLeft: 16,
        flexDirection: 'column',
        [theme.breakpoints.down("xs")]: {
            overflow: 'hidden'
        }
    },

    content_center: {
        width: '100%',
    },

    contentforms: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'

    },

    txtlogin: {
        fontSize: 30
    },

    form: {
        [theme.breakpoints.down("xs")]: {
            width: '90%'
        },
        width: '70%',
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
    },

    inputicons: {
        color: '#CDCDCD'
    },

    btnentrar: {
        marginTop: 10,
        color: '#FFF',
        borderRadius: 20,
        textTransform: 'capitalize'
    },

    subcontentform: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%',

        [theme.breakpoints.down("xs")]: {
            width: '90%'
        }
    },

    divider: {
        width: '60%',
        marginTop: 20,
        marginBottom: 15,

        [theme.breakpoints.down("xs")]: {
            width: '90%'
        }
    },

    textremember: {
        color: '#999999'
    },

    labellogin: {
        fontSize: 75,
        marginBottom: 25,
        fontFamily: 'Style Script',
        background: 'linear-gradient(90deg, rgba(159,118,52,1) 17%, rgba(203,163,62,1) 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: 500
    },

    footer: {
        position: 'absolute',
        bottom: 10,
        display: 'flex',
        flexDirection: 'row'
    },

    no_account: {
        color: '#999999',
        fontSize: 14
    },

    textlogsocial: {
        color: '#999999',
        fontSize: '1rem'
    },

    clickhere: {
        textDecoration: 'none',
        fontSize: 14,
        marginLeft: 2,
        color: '#999999',
        transition: '0.4s',

        "&:hover": {
            color: '#595959',
        }
    },

    txtentrar: {
        fontSize: '2.5rem',
        fontWeight: 300
    }

}))