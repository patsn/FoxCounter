import { useAppSettings } from "@/store/settings.store";
import { AppColors } from "@/theme/player.colors";
import React from "react";
import { Dimensions, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function RandomPlayer(): JSX.Element {
	const { randomPlayer, setRandomPlayer } = useAppSettings();

	return (
		<>
			<Text style={{ margin: 10, color: "white", fontSize: 20 }}>Random Picker:</Text>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => setRandomPlayer(true)}>
					<Text
						style={[
							styles.image,
							{ color: randomPlayer ? AppColors.primary : AppColors.white, borderColor: randomPlayer ? AppColors.primary : AppColors.white },
						]}>
						YES
					</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setRandomPlayer(false)}>
					<Text
						style={[
							styles.image,
							{ color: !randomPlayer ? AppColors.primary : AppColors.white, borderColor: !randomPlayer ? AppColors.primary : AppColors.white },
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
