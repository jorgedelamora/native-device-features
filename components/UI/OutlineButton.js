import { Text, Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Colors } from "../../constants/colors";

const OutlineButton = ({
	onPress,
	icon,
	color = Colors.primary500,
	size = 18,
	children = "",
}) => {
	return (
		<Pressable
			style={({ pressed }) => [styles.button, pressed ?? styles.pressed]}
			onPress={onPress}
		>
			<Ionicons
				name={icon}
				color={color}
				size={size}
				style={styles.icon}
			/>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

export default OutlineButton;

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		margin: 4,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderWidth: 1,
		borderColor: Colors.primary500,
	},
	pressed: {
		opacity: 0.7,
	},
	icon: {
		marginRight: 6,
	},
	text: {
		color: Colors.primary500,
	},
});
