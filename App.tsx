import React from 'react'
import StackNavigeitor from './src/navigation/StackNavigeitor'
import { NavigationContainer } from '@react-navigation/native'

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigeitor/>
    </NavigationContainer>
  )
}
