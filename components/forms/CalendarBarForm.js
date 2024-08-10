import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import CalendarTopBar from '../CalendarTopBar';

export default function CalendarBarForm({name, ...props}) {
    const {errors, touched, setFieldTouched, setFieldValue, values} = useFormikContext()
  return (
    <>
    <CalendarTopBar selectedDate={values[name]} setSelectedDate={(date) => setFieldValue(name, date)}/>
    <ErrorMessage errors={errors[name]} touched={touched[name]}/>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    }
});