import * as React from 'react' 
import Box from '@mui/material/Box' 
import InputLabel from '@mui/material/InputLabel' 
import MenuItem from '@mui/material/MenuItem' 
import FormControl from '@mui/material/FormControl' 
import Select, { SelectChangeEvent } from '@mui/material/Select' 
import {createTheme, ThemeProvider} from "@mui/material"


export default function SelectLang() {

  const [lang, setLang] = React.useState('en') 

  const handleChange = (event: SelectChangeEvent) => {
    setLang(event.target.value as string) 
  }

  const theme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          select: {
              root: {}
          }
        }
      },
      MuiPaper: {
        styleOverrides: {
            root: {
              marginTop: 6,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            }
        }
      }
    }
  })


  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ minWidth: 120, marginRight: 3 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Language</InputLabel>
        <Select
          sx={{ height: 46 }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={lang}
          label="Language"
          onChange={handleChange}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Español</MenuItem>
          <MenuItem value={'ru'}>Русский</MenuItem>
        </Select>
      </FormControl>
    </Box>
    </ThemeProvider>
  ) 
}