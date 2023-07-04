import * as React from 'react'
import {FC, useState} from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import FormControl from '@mui/material/FormControl'
import {createTheme, MenuItem, Select, SelectChangeEvent, ThemeProvider} from "@mui/material"
import {LangType} from "store/main/main.types"
import {useDispatch, useSelector} from "react-redux"
import {ChangeLangAC} from "store/main/main.reducer"
import {selectLang} from "components/blocks/Nav/nav.selector"


type Props = {
  handleChangeLanguage: (language: LangType) => void
}

export const SelectLang: FC<Props> = ({ handleChangeLanguage }) => {

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

  // const [language, setLanguage] = useState<LangType>('en')

  const dispatch = useDispatch()

  const lang = useSelector(selectLang)

  const handleOnChange = (event: SelectChangeEvent<LangType>) => {
    handleChangeLanguage(event.target.value as LangType)
    dispatch(ChangeLangAC(event.target.value as LangType))
  }

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{minWidth: 120, marginRight: 3}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Language</InputLabel>
          <Select
            sx={{height: 46}}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={lang}
            label="Language"
            onChange={handleOnChange}
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