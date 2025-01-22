import { Href, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function DeviceSelector() {
	const router = useRouter();
	const handlePress = (route: string) => {
		router.push(route as Href);
	};

	return (
		<View style={style.container}>
			<Button mode="contained" onPress={() => handlePress("pages/player/selector")}>
				Single Device
			</Button>

			<Button mode="contained" onPress={() => handlePress("pages/device/multiplayer")}>
				Multi Device
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000000",
	},
});
