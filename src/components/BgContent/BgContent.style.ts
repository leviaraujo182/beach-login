import { makeStyles } from '@material-ui/core'
import Bg from '_assets/images/bg.jpg'

const sizeTexts = 100

export const styles = makeStyles({
    main: {
        width: '100%',
        height: '100%',
    },

    bgimg: {
        backgroundImage: `url(${Bg})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
    },

    contentimg: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
    },

    solidfilter: {
        backgroundColor: 'black',
        width: '100%',
        height: '100%',
        opacity: 0.2,
        zIndex: 2,
        position: 'absolute'
    },

    textimg: {
        color: '#FFF',
        fontSize: sizeTexts,
        fontWeight: 'bold',
        fontFamily: 'Style Script'
    },

    subtextimg: {
        color: '#FFF',
        fontSize: sizeTexts,
        fontFamily: 'Style Script',
    },

    content_texts: {
        zIndex: 3,
        display: 'flex'
    }
})