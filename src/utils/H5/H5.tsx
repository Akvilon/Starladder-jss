import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './H5.styles';

type H5Props = {
    title: string | undefined;
    defeated?: boolean;
}

const H5: React.FC<H5Props> = ({title, defeated}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <h1 className={defeated ? `${classes.appH5} ${classes.defeated}`: classes.appH5}>{title}</h1>
    )
}

export {H5};