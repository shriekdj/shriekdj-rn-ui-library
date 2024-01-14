import React from 'react'
import { StyleSheet, TouchableOpacity, TouchableOpacityProps, View, ViewProps } from 'react-native';

const Chip = ({ style, children, ...props }: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<TouchableOpacity> & Readonly<TouchableOpacityProps>) => {
  return <TouchableOpacity style={[
    styles.singleChip,
    style
  ]} {...props}>{children}</TouchableOpacity>
}

export const ChipsView = ({style, children, ...props}: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<View> & Readonly<ViewProps>) => {
  return <View style={[
    styles.container,
    style
  ]} {...props}>
    {children}
  </View>
}

const styles = StyleSheet.create({
  singleChip: {
    // flex: 1,
    // flexGrow: 0.5,
    // flexShrink: 0.5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#2D3748',
    paddingVertical: 4.5,
    paddingHorizontal: 9,
    fontFamily: 'sans-serif',
    fontSize: 12,
    fontWeight: 'bold',
    // marginEnd: 'auto',

    // textTransform: 'uppercase',
    color: '#4A5568',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: 5
  }
});


export default Chip