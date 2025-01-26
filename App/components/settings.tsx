import { useAppSettings } from "@/store/settings.store";
import { AppColors } from "@/theme/player.colors";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function AppSettings(): JSX.Element {
	const { startLife, setStartLife } = useAppSettings();

	return (
		<>
			<Text style={{ margin: 10, color: "white", fontSize: 20 }}>Starting Life:</Text>
			<View style={styles.container}>
				<TouchableOpacity onPress={() => setStartLife(10)}>
					<Image
						source={require("@/assets/images/life10.png")}
						style={[styles.image, { tintColor: startLife === 10 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>

				<TouchableOpacity onPress={() => setStartLife(20)}>
					<Image
						source={require("@/assets/images/life20.png")}
						style={[styles.image, { tintColor: startLife === 20 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setStartLife(30)}>
					<Image
						source={require("@/assets/images/life30.png")}
						style={[styles.image, { tintColor: startLife === 30 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setStartLife(40)}>
					<Image
						source={require("@/assets/images/life40.png")}
						style={[styles.image, { tintColor: startLife === 40 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setStartLife(50)}>
					<Image
						source={require("@/assets/images/life50.png")}
						style={[styles.image, { tintColor: startLife === 50 ? AppColors.primary : AppColors.white }]}
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => setStartLife(60)}>
					<Image
						source={require("@/assets/images/life60.png")}
						style={[styles.image, { tintColor: startLife === 60 ? AppColors.primary : AppColors.white }]}
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
		tintColor: "#FFFFFF",
	},
});
