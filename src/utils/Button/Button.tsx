import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './Button.styles';

type ButtonProps = {
    type: any;
    title: string;
    isSelected: boolean;
    index: number;
    handleTabClick: (index: number) => void;
}

const Button: React.FC<ButtonProps> = ({ isSelected, type, index, title, handleTabClick }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <button
            className={isSelected ? `${classes.appButton} ${classes.appButtonActive}` : classes.appButton}
            type={type}
            onClick={() => handleTabClick(index)}
        >{title}
        </button>
    )
}

export { Button };