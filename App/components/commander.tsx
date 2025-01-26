import { useAppSettings } from "@/store/settings.store";
import { AppTheme } from "@/theme/app.theme";
import { AppColors } from "@/theme/player.colors";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function EDH(): JSX.Element {
	const { showEDH, setShowEDH } = useAppSettings();

	return (
		<>
			<Text style={{ margin: 10, color: AppTheme.light.colors.text, fontSize: 20 }}>Commander Shortcut:</Text>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => setShowEDH(true)}>
					<Text
						style={[
							styles.image,
							{ color: showEDH ? AppColors.primary : AppColors.white, borderColor: showEDH ? AppColors.primary : AppColors.white },
						]}>
						YES
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setShowEDH(false)}>
					<Text
						style={[
							styles.image,
							{ color: !showEDH ? AppColors.primary : AppColors.white, borderColor: !showEDH ? AppColors.primary : AppColors.white },
						]}>
						NO
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
	},
	image: {
		marginLeft: 5,
		marginRight: 5,
		resizeMode: "contain",
		borderWidth: Dimensions.get("window").width / 160,
		borderRadius: 10,
		borderColor: AppColors.white,
		width: Dimensions.get("window").width / 2 - 40,
		textAlign: "center",
		// fontSize: 25,
		fontSize: Dimensions.get("window").width / 14,
		fontWeight: "bold",
		color: AppColors.white,
		tintColor: "#FFFFFF",
	},
});
