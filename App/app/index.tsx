import { AppTheme } from "@/theme/app.theme";
import { Anton_400Regular, useFonts } from "@expo-google-fonts/anton";
import { useKeepAwake } from "expo-keep-awake";
import { Href, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

export default function Index() {
	useKeepAwake();

	const router = useRouter();
	const handlePress = (route: string) => {
		router.push(route as Href);
	};

	const [fontsLoaded] = useFonts({
		Anton_400Regular,
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return (
			<View>
				<Text>hi</Text>
			</View>
		);
	}

	return (
		<View style={style.container} onLayout={onLayoutRootView}>
			<Text style={style.headerText}>Fox Counter</Text>
			<Button mode="contained" labelStyle={style.startButtonLabel} style={style.startButton} onPress={() => handlePress("pages/device/selector")}>
				START
			</Button>
		</View>
	);
}

const style = StyleSheet.create({
	headerText: {
		fontFamily: "Anton_400Regular",
		fontSize: 24,
		position: "absolute",
		top: "30%",
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: AppTheme.dark.colors.background,
	},
	lifeCounterContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		width: "100%",
		height: "50%",
	},
	startButtonLabel: {
		fontFamily: "Anton_400Regular",
	},
	startButton: {
		position: "absolute",
		bottom: 20,
	},
});
