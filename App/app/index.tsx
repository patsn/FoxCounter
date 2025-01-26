import EDH from "@/components/commander";
import Dices from "@/components/dices";
import RandomPlayer from "@/components/randomize";
import AppSettings from "@/components/settings";
import { useAppSettings } from "@/store/settings.store";
import { AppTheme } from "@/theme/app.theme";
import { Anton_400Regular, useFonts } from "@expo-google-fonts/anton";
import { useKeepAwake } from "expo-keep-awake";
import { Href, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

export default function Index() {
	useKeepAwake();

	const { playerAmmount } = useAppSettings();
	const Redirect = (players: number) => {
		const route = `/pages/counter/layout.${players}`;
		router.push(route as Href);
	};

	const router = useRouter();

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
			<Image style={style.image} source={require("@/assets/images/fox-round-png.png")} />
			<View style={{ marginTop: 120 }}>
				<View>
					<EDH />
				</View>
				<View>
					<RandomPlayer />
				</View>
				<View>
					<AppSettings />
				</View>
				<View>
					<Dices />
				</View>
			</View>
			<TouchableOpacity onPress={() => Redirect(playerAmmount)}>
				<Text style={style.fight}>Fight!</Text>
			</TouchableOpacity>
		</View>
	);
}

const style = StyleSheet.create({
	image: {
		height: Dimensions.get("screen").height / 6,
		resizeMode: "contain",
		position: "absolute",
		top: 60,
	},

	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: AppTheme.dark.colors.background,
	},

	fight: {
		color: AppTheme.light.colors.text,
		fontFamily: "Anton_400Regular",
		fontSize: 48,
		margin: 20,
	},
});
