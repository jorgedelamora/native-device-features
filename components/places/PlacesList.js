import { FlatList, StyleSheet, View, Text } from "react-native";
import React from "react";
import PlaceItem from "./PlaceItem";

const PlacesList = ({ places = [] }) => {
	const renderListItem = (place) => {
		return <PlaceItem place={place} />;
	};

	if (!places || places.length === 0) {
		return (
			<View style={styles.fallbackContainer}>
				<Text style={styles.fallbackText}>
					No places added yet - start adding some!
				</Text>
			</View>
		);
	}

	return (
		<FlatList
			data={places}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => renderListItem(item)}
		/>
	);
};

export default PlacesList;

const styles = StyleSheet.create({
	fallbackContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	fallbackText: {
		fontSize: 16,
	},
});
