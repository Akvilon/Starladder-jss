import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Caption.styles';

type CaptionProps = {
    title: string | undefined;
    accent?: boolean;
}

const Caption: React.FC<CaptionProps> = ({title, accent}) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <p className={accent ? classes.appCaptionAccent : classes.appCaption}>{title}</p>
    )
}

export {Caption};