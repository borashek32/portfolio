import s from 'styles/Main.module.sass'
import * as React from "react"
import { useState } from "react"
import { useSelector } from "react-redux"
import { InputDefault } from "../utils/InputDefault"
import { useFormik } from "formik"
import emailjs from '@emailjs/browser'
import { Error } from "components/blocks/utils/Error"
import { selectContact } from "components/blocks/Contact/contact.selector"
import Loader from '../utils/Loader'
import Notification from "components/blocks/utils/Notification"
import { Trans } from "react-i18next"
import Button from "@mui/material/Button"
import { Header } from '../utils/Header'
import { AppContainer } from '../utils/AppContainer'


type FormikErrorType = {
  user_name?: string
  user_email?: string
  message?: string
}

export const Contact = () => {
  const contact = useSelector(selectContact)
  const [open, setOpen] = useState(false)
  const [loader, setLoader] = useState(false)
  const regX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

  const formik = useFormik({
    initialValues: {
      user_name: '',
      user_email: '',
      message: ''
    },

    validate: (values) => {
      const errors: FormikErrorType = {}
      if (!values.user_name) {
        errors.user_name = 'Your name is required'
      }
      if (!values.user_email) {
        errors.user_email = 'Your email address is required'
      } else if (!regX.test(values.user_email)) {
        errors.user_email = 'Invalid email address'
      }
      if (!values.message) {
        errors.message = 'Message is required'
      } else if (values.message.length < 10) {
        errors.message = 'Your message is too short'
      }
      return errors
    },

    onSubmit: (values) => {
      setLoader(true)
      emailjs.send('react_apps_portfolio', 'template_hvucuvu', values, 'j8gE2ZL2UeMzMqmxB')
        .then((result) => {
          console.log('123', result)
          setTimeout(() => {
            setOpen(true)
            setLoader(false)
          }, 1000)
          formik.resetForm()
        }
      )
    }
  })

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  return (
    <AppContainer
      id={contact.id}
      bgColor='#31065A'
    >
      <Header
        title='contact.contact'
        titleOtherColor='contact.me'
      />
      {open && <Notification
        text={"Your message sent successfully"}
        severity={"success"}
        handleClose={handleClose}
        open={open}
      />}
      <div className={s.blockWrapperContact}>
        <form className={s.formSize} id={'form'} onSubmit={formik.handleSubmit}>
          <div style={{position: 'relative', fontSize: 12, color: 'grey'}}>
            <Trans i18nKey={"contact.placeholderName"}>{contact.placeholderName}</Trans>
            <InputDefault {...formik.getFieldProps('user_name')} />
            {formik.touched.user_name && formik.errors.user_name ? <Error error={formik.errors.user_name}/> : null}
          </div>

          {loader && <Loader/>}

          <div style={{position: 'relative', fontSize: 12, color: 'grey'}}>
            <Trans i18nKey={"contact.placeholderEmail"}>{contact.placeholderEmail}</Trans>
            <InputDefault {...formik.getFieldProps('user_email')} />
            {formik.touched.user_email && formik.errors.user_email ? <Error error={formik.errors.user_email}/> : null}
          </div>

          <div style={{position: 'relative', fontSize: 12, color: 'grey'}}>
            <Trans i18nKey={"contact.placeholderMessage"}>{contact.placeholderMessage}</Trans>
            <InputDefault {...formik.getFieldProps('message')} />
            {formik.touched.message && formik.errors.message ? <Error error={formik.errors.message}/> : null}
          </div>

          <div style={{marginTop: '10px'}}>
            <Button
              type={"submit"}
              sx={{
                color: "#fff",
                fontSize: '18px',
                fontWeight: 600,
                backgroundColor: '#F86F03',
                padding: '5px 10px',
                borderRadius: 20,
                transition: 'color, .3s ease',
                "&:hover": {
                  backgroundColor: '#5cd2df'
                }
              }}
              variant="outlined"
            >
              <Trans i18nKey={`contact.buttonText`}>
                Send message
              </Trans>
            </Button>
          </div>
        </form>
      </div>
    </AppContainer>
  )
}