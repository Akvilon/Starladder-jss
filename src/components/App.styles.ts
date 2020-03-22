import { createUseStyles } from "react-jss";
import { Theme, base } from "../styles";


export default createUseStyles((theme: Theme) => ({
    ...base(theme),
}))