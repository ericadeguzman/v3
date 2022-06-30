import { colors } from '@mui/material';
import { deepPurple, purple, red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


const theme = createTheme ({
    // typography: {
    //     "fontFamily": `'Press Start 2P'`,
    // },
    typography: {
      button: {
        textTransform: 'none',
        fontWeight: '400',
      },
    },
    palette: {
      background: {
        default: "#fff",
      },
      primary: {
        light: '#00a6cf',
        main: '#00467e',
        dark: '#00467E',
        contrastText: '#fff',
      },
      secondary: {
        light: '#C9C7C7',
        main: '#1f2532',
        dark: '#4D4D4D',
        contrastText: '#fff',
      },
    },
    // CBT COLORS: 
    // --cyan: #00a6cf;
    // --dark-blue: #00467E;
    // --green: #417505;
    // --midnight: #1f2532;
    // --red: #bc2c2f;
    
    // --light-color: white;
    // --dark-color: #1f2532;


    // /* whites & grays */
    // --white: #fff;
    // --pale-gray: #f9f9f9;
    // --light-gray: #C9C7C7;
    // --medium-gray: #808080;
    // --dark-gray: #4D4D4D;


});


export default theme;