import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#f4cd04',
    },
    secondary: {
      main: '#f7f7f7',
    },
    background: {
      default: '#f0f1f5',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h2: {
      fontFamily: 'Fira Sans, sans-serif',
    },
    h3: {
      fontFamily: 'Lato, sans-serif',
    },
    h4: {
      fontFamily: 'Lato, sans-serif',
    },
    body1: {
      fontFamily: 'Epilogue, sans-serif',
    },
    button: {
      fontFamily: 'Lato, sans-serif',
    },
  },
});

export default theme;
