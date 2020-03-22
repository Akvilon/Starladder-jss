import { createUseStyles } from "react-jss";
import { Theme, getRedColor } from "../../styles";
import headerBg from '../../assets/header_bg.png';
import headerMobBg from '../../assets/header_mob_bg.png';

export default createUseStyles((theme: Theme) => ({
    header: {
        height: '375px',
        width: '100%',
        background: `url('${headerBg}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',

        '@media screen and (max-width: 768px)': {
            height: '240px',
            background: `url('${headerMobBg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    },
    logo: {
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,

        '@media screen and (max-width: 768px)': {
            display: 'none'
        }
    },
    headerInner: {
        height: '100%',
        maxWidth: '1460px',
        padding: '0px 20px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',

        '@media screen and (max-width: 1440px)': {
            maxWidth: '752px'
        },

        '@media screen and (max-width: 768px)': {
            maxWidth: '414px',
            margin: '0 auto',
            padding: 0
        },
    },
    headerTitle: {
        paddingTop: '126px',
        zIndex: 1,
        position: 'relative',

        '@media screen and (max-width: 768px)': {
            padding: '88px 20px 0px 20px'
        }
    },
    headerTabs: {
        display: 'flex',
        zIndex: 1,
        position: 'relative',
        marginTop: 'auto',
        borderBottom: `2px solid ${getRedColor(theme)}`,

        '@media screen and (max-width: 768px)': {
            padding: '0px 20px'
        }
    }
}))