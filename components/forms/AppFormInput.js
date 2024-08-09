import React from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import AppTextInput from '../AppTextInput'

export default function AppFormInput({name, ...otherProps}) {
    const {errors, touched, setFieldTouched, handleChange} = useFormikContext()
  return (
    <>
        <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
        />
        <ErrorMessage errors={errors[name]} touched={touched[name]}/>
    </>
  )
}
