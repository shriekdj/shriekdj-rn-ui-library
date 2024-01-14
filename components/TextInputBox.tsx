import { useState } from 'react';
import { TextInput, TextInputProps, StyleSheet, useColorScheme, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native'

const TextInputBox = ({ style, onFocus, ...parentProps }: JSX.IntrinsicAttributes & JSX.IntrinsicClassAttributes<TextInput> & Readonly<TextInputProps>) => {
	// const {style, ...parentProps} = props;
	const colorScheme = useColorScheme();
	const styles = (colorScheme === 'dark') ? darkStyles : lightStyles;
	const [isFocused, setIsFocused] = useState(false);

	return <TextInput style={[styles.container, isFocused && styles.focus, style]} {...parentProps} onFocus={(e) => {
		setIsFocused(true);
		onFocus && onFocus(e);
	}} />
}

const lightStyles = StyleSheet.create({
	container: {
		width: '100%',
		padding: 10,
		backgroundColor: '#F3F4F6',
		borderColor: '#D1D5DB',
		borderWidth: 1,
		borderRadius: 8,
		color: '#111827',
		placeholderTextColor: '#A0AEC0',
		// fontSize: 20
		minHeight: 35
	},
	focus: {
		borderColor: '#2563EB',
		outlineColor: '#2563EB',
	}
});

const darkStyles = StyleSheet.create({
	container: 	{
		...lightStyles.container,
		backgroundColor: '#4B5563',
		borderColor: '#4B5563',
		color: '#FFFFFF',
		placeholderTextColor: '#9CA3AF',
	},
	focus: {
		borderColor: '#2563EB',
		outlineColor: '#2563EB',
	}
})

export default TextInputBox;