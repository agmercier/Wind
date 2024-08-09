import React from 'react'
import { StyleSheet } from 'react-native'

import AppText from '../AppText'

export default function ErrorMessage({errors, touched}) {
    if (!errors || !touched) return null;
  return (
    <AppText style={styles.error}>{errors}</AppText>
  )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    }
})