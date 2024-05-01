import {FC} from 'react'
import Box from '@mui/material/Box'
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
      <Box sx={{
        width: 150, 
        height: 40,
        marginRight: 3
      }}>
        <FormControl fullWidth>
          <Select
            sx={{
              height: 40,
              backgroundColor: '#fff',
              color: '#461959',
              fontSize: 18,
              fontWeight: 600,
              borderRadius: 20
            }}
            id="demo-simple-select"
            value={lang}
            onChange={handleOnChange}
          >
            <MenuItem
              sx={{
                fontSize: 18,
                fontWeight: 600,
                transition: 'all .3s ease',
                '&:hover': {
                  color: '#F86F03'
                }
              }} 
              value={'en'}
            >
              English
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: 18,
                fontWeight: 600,
                transition: 'all .3s ease',
                '&:hover': {
                  color: '#F86F03'
                }
              }} 
              value={'es'}
            >
              Español
            </MenuItem>
            <MenuItem
              sx={{
                fontSize: 18,
                fontWeight: 600,
                transition: 'all .3s ease',
                '&:hover': {
                  color: '#F86F03'
                }
              }} 
              value={'ru'}
            >
              Русский
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  )
}