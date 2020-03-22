import { createUseStyles } from "react-jss";
import { Theme, getWhiteColor } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    appH1: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '6.25rem',
        lineHeight: '115%',
        color: getWhiteColor(theme),
        '@media screen and (max-width: 768px)': {
            fontSize: '3rem',
            lineHeight: '3.75rem'
        }
    },
}))