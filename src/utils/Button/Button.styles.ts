import { createUseStyles } from "react-jss";
import { Theme, base, getWhiteColor, getRedColor, getDarkGreyColor } from "../../styles";

export default createUseStyles((theme: Theme) => ({
    appButton: {
        height: '60px',
        width: '175px',
        background: 'transparent',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        color: getDarkGreyColor(theme),
        transition: '.3s',
        border: 'none',
        letterSpacing: '0.094rem',
        textTransform: 'uppercase',
        cursor: 'pointer',
    
        '@media screen and (max-width: 768px)': {
            width: '115px',
            height: '50px',
            fontSize: '0.750rem'
        }
    },
    appButtonActive: {
        color: getWhiteColor(theme),
        background: getRedColor(theme),
        transition: '.3s'
    }
}))