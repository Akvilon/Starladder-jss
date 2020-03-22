import { createUseStyles } from "react-jss";
import { Theme, getWhiteColor, getDarkGreyColor } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    appCaption: {
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.01rem',
        color: getDarkGreyColor(theme),

        '@media screen and (max-width: 768px)': {
            fontSize: '0.750rem'
        }
    },
    appCaptionAccent: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        letterSpacing: '0.06rem',
        textTransform: 'uppercase',
        color: getWhiteColor(theme),

        '@media screen and (max-width: 768px)': {
            fontSize: '0.750rem'
        }
    }
}))