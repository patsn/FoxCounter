import { Href, useRouter } from "expo-router";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function PlayerSelector() {
	const router = useRouter();
	const handlePress = (route: string) => {
		router.push(route as Href);
	};

	return (
		<View style={style.container}>
			<Button mode="contained" onPress={() => handlePress("pages/counter/layout.2")}>
				2
			</Button>

			<Button mode="contained" onPress={() => handlePress("pages/counter/layout.3")}>
				3
			</Button>

			<Button mode="contained" onPress={() => handlePress("pages/counter/layout.4")}>
				4
			</Button>

			<Button mode="contained" onPress={() => handlePress("pages/counter/layout.5")}>
				5
			</Button>

			<Button mode="contained" onPress={() => handlePress("pages/counter/layout.6")}>
				6
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
