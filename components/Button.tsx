import React, { useState } from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, useColorScheme } from 'react-native';

const Button = ({ style, children, onFocus, ...parentProps}: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TouchableOpacity> & Readonly<TouchableOpacityProps>) => {
	const colorScheme = useColorScheme();
	const styles = (colorScheme === 'dark') ? darkStyles : lightStyles;
	const [isFocused, setIsFocused] = useState(false);

  return <TouchableOpacity style={[
    // styles.button,
    styles.button,
    isFocused && styles.focusRing,
    style
  ]} {...parentProps} onFocus={(e) => {
    setIsFocused(true),
    onFocus && onFocus(e);
  }}>
    {children}
  </TouchableOpacity>
}

const lightStyles = StyleSheet.create({
  button: {
    backgroundColor: '#3498db',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    // marginHorizontal: 5,
    // marginBottom: 5,
  },
  focusRing: {
    borderWidth: 4,
    borderColor: '#3498db',
  },

});

const darkStyles = StyleSheet.create({
  button: {
    ...lightStyles.button,
    backgroundColor: '#3498db',
  },
  focusRing: {
    ...lightStyles.focusRing,
    borderColor: '#2c3e50',
  },
})

export default Button