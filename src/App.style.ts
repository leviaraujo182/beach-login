import { makeStyles } from '@material-ui/core'
import { Theme, createStyles } from '@material-ui/core/styles'

export const styles = makeStyles((theme: Theme) => createStyles({
    contentleft: {
        width: '60%',
        height: '100vh',
        position: 'relative',
        [theme.breakpoints.down("xs")]: {
            display: 'none'
        }

    },
    
    contentright: {
        width: '40%',
        height: '100vh',

        [theme.breakpoints.down("xs")]: {
            width: '100%',
            overflow: 'hidden'
        }
    },

    contentmain: {
        display: 'flex',
    }
}))