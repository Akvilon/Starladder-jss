import * as React from 'react';
import logo from '../../assets/logo.svg';
import { Tabs } from '../Tabs';
import { useTheme } from 'react-jss';
import useStyles from './Header.styles';
import { H1 } from '../../utils/H1';

type HeaderProps = {
    children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <img src={logo} alt="logo" />
            </div>
            <div className={classes.headerInner}>
                <div className={classes.headerTitle}>
                    <H1 title="Make me up!"/>
                </div>
                <div className={classes.headerTabs}>
                    {children}
                </div>
            </div>
        </header>
    )
}


export { Header };