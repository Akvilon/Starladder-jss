import { createUseStyles } from "react-jss";
import { Theme } from "../../styles";



export default createUseStyles((theme: Theme) => ({
    tabContent: {
        height: '100%',
        maxWidth: '1460px',
        margin: '0 auto',
        padding: '60px 20px 0px 20px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        '@media screen and (max-width: 1440px)': {
            maxWidth: '752px'
        },
        '@media screen and (max-width: 768px)': {
            maxWidth: '414px',
            padding: '30px 20px 0px 20px'
        }
    }
}))