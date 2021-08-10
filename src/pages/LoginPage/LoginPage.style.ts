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
    }

})