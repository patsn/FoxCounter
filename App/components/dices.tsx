import { useAppSettings } from "@/store/settings.store";
import { AppColors } from "@/theme/player.colors";
import React from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function Dices(): JSX.Element {
	const { playerAmmount, setPlayerAmmount } = useAppSettings();

	return (
		<>
			<Text style={{ margin: 10, color: "white", fontSize: 20 }}>Players:</Text>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => setPlayerAmmount(1)}>
					<Image
						source={require("@/assets/images/dice1.png")}
						style={[styles.image, { tintColor: playerAmmount === 1 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPlayerAmmount(2)}>
					<Image
						source={require("@/assets/images/dice2.png")}
						style={[styles.image, { tintColor: playerAmmount === 2 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPlayerAmmount(3)}>
					<Image
						source={require("@/assets/images/dice3.png")}
						style={[styles.image, { tintColor: playerAmmount === 3 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPlayerAmmount(4)}>
					<Image
						source={require("@/assets/images/dice4.png")}
						style={[styles.image, { tintColor: playerAmmount === 4 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPlayerAmmount(5)}>
					<Image
						source={require("@/assets/images/dice5.png")}
						style={[styles.image, { tintColor: playerAmmount === 5 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setPlayerAmmount(6)}>
					<Image
						source={require("@/assets/images/dice6.png")}
						style={[styles.image, { tintColor: playerAmmount === 6 ? AppColors.primary : AppColors.white }]}
					/>
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
		width: Dimensions.get("window").width / 6 - 20,
		height: Dimensions.get("window").width / 6 - 20,
	},
});
