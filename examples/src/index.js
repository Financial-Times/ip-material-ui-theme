import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import materialThemeConfig from '../../index'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';

const muiTheme = createMuiTheme(materialThemeConfig);

ReactDOM.render(
  <MuiThemeProvider theme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
);
