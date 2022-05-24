// ##############################
// *
// * MUI config
// *
// ##############################

import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  typography: {
    fontFamily: ['Noto Sans JP'].join(',')
  },

  palette: {
    primary: {
      main: '#1976D2'
    }
  }
})

export default theme
