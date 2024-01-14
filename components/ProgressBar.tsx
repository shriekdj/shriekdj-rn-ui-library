import React from 'react'
import { View, StyleSheet, ViewProps, useColorScheme } from 'react-native'

type ProgressBarExtraProps = {
  barColor?: string;
  percentage?: number;
}

const ProgressBar = ({barColor, percentage, style, ...props}: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<View> & Readonly<ViewProps> & ProgressBarExtraProps) => {
  const colorScheme = useColorScheme()
  const styles = colorScheme === 'dark' ? darkStyles : lightStyles;
  return (
    <View {...props} style={[styles.container, style]}>
      <View style={{
        backgroundColor: barColor || 'blue',
        height: '100%',
        borderRadius: 999,
        width: `${percentage || 20}%`
      }} />
    </View>
  )
}

const lightStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#ccc', // Replace with your desired color for light mode
    borderRadius: 999, // Use a large value for rounded-full effect
    height: 5,
    marginVertical: 5
  },
})

const darkStyles = StyleSheet.create({
  container: {
    ...lightStyles,
    backgroundColor: '#333', // Replace with your desired color for dark mode
  },
})

export default ProgressBar