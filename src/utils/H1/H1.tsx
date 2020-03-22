import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './H1.styles';

type H1Props = {
    title: string;
}

const H1: React.FC<H1Props> = ({title}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <h1 className={classes.appH1}>{title}</h1>
    )
}

export {H1};