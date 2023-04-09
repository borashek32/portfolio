import s from 'styles/Main.module.sass'
import * as React from "react"
import {Title} from "../utils/Title"
import {ButtonDefault} from "../utils/ButtonDefault"
import {useSelector} from "react-redux"
import {InputDefault} from "../utils/InputDefault"
import {useFormik} from "formik"
import emailjs from '@emailjs/browser'
import {Error} from "components/blocks/utils/Error";
import {selectContact} from "components/blocks/Contact/contact.selector";
import Snackbar  from '@mui/material/Snackbar';
import {useState} from "react";
import Stack from "@mui/material/Stack";
import Loader from '../utils/Loader'
import {Alert} from "components/blocks/utils/Alert";


type FormikErrorType = {
  user_name?: string
  user_email?: string
  message?: string
}

export const Contact = () => {

  const contact = useSelector(selectContact)
  const [open, setOpen] = useState(false);
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
      return;
    }
    setOpen(false);
  };

  return (
    <div className={s.block} style={{position: 'relative'}}>
      <Title name={contact.name} id={contact.id}/>
      {open &&
        <Stack spacing={2} sx={{ width: '100%' }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
              Your message sent successfully!
            </Alert>
          </Snackbar>
        </Stack>
      }
      <div className={s.blockWrapper}>
        <form className={s.formSize} id={'form'} onSubmit={formik.handleSubmit}>
          <div style={{position: 'relative'}}>
            <InputDefault
              placeholder={"Enter your name"}
              {...formik.getFieldProps('user_name')}
            />
            {formik.touched.user_name && formik.errors.user_name ? <Error error={formik.errors.user_name}/> : null}
          </div>

          {loader && <Loader />}

          <div style={{position: 'relative'}}>
            <InputDefault
              placeholder={"Enter your email address"}
              {...formik.getFieldProps('user_email')}
            />
            {formik.touched.user_email && formik.errors.user_email ? <Error error={formik.errors.user_email}/> : null}
          </div>

          <div style={{position: 'relative'}}>
            <InputDefault
              placeholder={"Enter your message"}
              {...formik.getFieldProps('message')}
            />
            {formik.touched.message && formik.errors.message ? <Error error={formik.errors.message}/> : null}
          </div>

          <div style={{marginTop: '10px'}}>
            <ButtonDefault name={"Send message"} type={"submit"}/>
          </div>
        </form>
      </div>
    </div>
  )
}