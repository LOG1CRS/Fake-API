import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fbc02d',
    },
    secondary: {
      main: '#000',
    },
    background: {
      default: '#f0f1f5',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
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
      fontWeight: 900,
    },
  },
});

export default theme;
