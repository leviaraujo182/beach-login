import { makeStyles } from '@material-ui/core'
import Bg from '_assets/images/bg.jpg'

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
        height: '100%'
    }
})