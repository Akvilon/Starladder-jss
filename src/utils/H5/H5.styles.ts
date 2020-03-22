import { createUseStyles } from "react-jss";
import { Theme, getBlackColor, getDarkGreyColor } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    appH5: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '1.5rem',
        lineHeight: '2.188rem',
        color: getBlackColor(theme),

        '@media screen and (max-width: 768px)': {
            lineHeight: '2rem'
        }
    },
    defeated: {
        color: getDarkGreyColor(theme),
    }
}))