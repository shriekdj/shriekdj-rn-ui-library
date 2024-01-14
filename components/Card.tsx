import React, { Fragment, useState } from 'react'
import { View, StyleSheet, useColorScheme, ViewProps } from 'react-native'

const Card = ({ style, onTouchStart, onTouchEnd, children, ...parentProps }: React.JSX.IntrinsicAttributes & React.JSX.IntrinsicClassAttributes<View> & Readonly<ViewProps>) => {
	const colorScheme = useColorScheme();
	const [isTouching, setIsTouching] = useState(false)
	const styles = (colorScheme === 'dark') ? darkStyles : lightStyles;
	return <View style={[
		styles.container,
		isTouching && styles.touchContainer,
		style
	]} {...parentProps}
		onTouchStart={(e) => {
			setIsTouching(true);
			onTouchStart && onTouchStart(e);
		}}
		onTouchEnd={(e) => {
			setIsTouching(false);
			onTouchEnd && onTouchEnd(e);
		}}
	>
		{children}
	</View>
}

const lightStyles = StyleSheet.create({
	container: {
		// flex: 1,
		display: 'flex',
		maxWidth: '100%', // Equivalent to max-w-sm
		padding: 6, // Equivalent to p-6
		backgroundColor: 'white', // Equivalent to bg-white
		borderColor: '#E5E7EB', // Equivalent to border border-gray-200
		borderRadius: 8, // Equivalent to rounded-lg
		shadowColor: '#000', // Shadow color
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 2,
	},
	touchContainer: {
		backgroundColor: '#F3F4F6', // Equivalent to hover:bg-gray-100
	},

});

const darkStyles = StyleSheet.create({
	container: {
		...lightStyles.container,
		backgroundColor: '#1F2937',
		borderColor: '#374151'
	},
	touchContainer: {
		...lightStyles.touchContainer,
		backgroundColor: '#2D3748'
	},
})

export default Card