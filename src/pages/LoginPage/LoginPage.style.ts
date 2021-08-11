import { makeStyles } from '@material-ui/core'
import bg from '_assets/images/bg.jpg'

const padding = 16

export const styles = makeStyles({
    main: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        paddingRight: 16,
        paddingLeft: 16
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
        width: '70%',
        paddingTop: 5,
        paddingBottom: 5,

        "& .MuiOutlinedInput-input": {
            height: 14,
            borderRadius: 10,
        },

        "& .MuiOutlinedInput-root": {
            borderRadius: 14,
        }
    },

    inputicons: {
        color: '#CDCDCD'
    },

    btnentrar: {
        marginTop: 10,
        color: '#FFF',
        borderRadius: 20,
    },

    subcontentform: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '70%'
    },

    divider: {
        width: '60%',
        marginTop: 20,
        marginBottom: 15
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

})