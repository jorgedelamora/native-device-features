import { useState } from "react";
import { View, Image, StyleSheet, Alert, Text } from "react-native";
import {
	launchCameraAsync,
	useCameraPermissions,
	PermissionStatus,
} from "expo-image-picker";
import { Colors } from "../../constants/colors";
import OutlineButton from "../UI/OutlineButton";

const ImagePicker = () => {
	const [pickedImage, setPickedImage] = useState();
	const [cameraPermission, requestPermission] = useCameraPermissions(null);

	const verifyPermisions = async () => {
		if (cameraPermission.status === PermissionStatus.UNDETERMINED) {
			const permissionResponse = await requestPermission();
			return permissionResponse.granted;
		}

		if (cameraPermission.status === PermissionStatus.DENIED) {
			Alert.alert(
				"Insufficient Permissions!",
				"you need to grant camera permissions to use this app."
			);
			return false;
		}

		return true;
	};

	const onTakeImage = async () => {
		const hasPermissions = await verifyPermisions();
		if (!hasPermissions) {
			return;
		}

		const image = await launchCameraAsync({
			allowsEditing: true,
			aspect: [16, 9],
			quality: 0.5,
		});
		setPickedImage(image);
	};

	let imagePreview = pickedImage ? (
		<Image
			source={{ uri: pickedImage.uri }}
			style={styles.imagePreview}
		/>
	) : (
		<View style={styles.imagePreview}>
			<Text>No image taken yet...</Text>
		</View>
	);

	return (
		<View>
			<View>{imagePreview}</View>
			<OutlineButton
				icon="camera"
				onPress={onTakeImage}
			>
				Take Image
			</OutlineButton>
		</View>
	);
};

export default ImagePicker;

const styles = StyleSheet.create({
	imagePreview: {
		width: "100%",
		height: 200,
		marginVertical: 8,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: Colors.primary100,
		borderRadius: 4,
	},
});
