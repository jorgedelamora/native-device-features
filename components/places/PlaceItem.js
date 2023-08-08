import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import React from "react";

const PlaceItem = ({ place, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<Image source={{ uri: place.ImageUri }} />
			<View>
				<Text>{place.title}</Text>
				<Text>{place.address}</Text>
			</View>
		</Pressable>
	);
};

export default PlaceItem;

const styles = StyleSheet.create({});
