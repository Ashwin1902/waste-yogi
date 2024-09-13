import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const layout = () => {
  return (
   <>
   <Tabs>
    <Tabs.Screen name='index' />
   </Tabs>
   </>
  )
}

export default layout