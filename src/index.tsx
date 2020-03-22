import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/App';
import { ThemeProvider } from 'react-jss';
import { mainTheme } from './styles';

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
        <App />
    </ThemeProvider>
    , document.getElementById('root'));

