import React from 'react'
import { Button, View } from 'react-native'
import { useFormikContext } from 'formik'

export default function SubmitButton({title}) {
    const {handleSubmit} = useFormikContext()
  return (
    <View style={{marginTop: 20}}>
      <Button  title={title} onPress={handleSubmit} />
    </View>
    
  )
}
