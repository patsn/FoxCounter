import LeaveApp from "@/components/leaveApp";
import { AppTheme } from "@/theme/app.theme";
import * as NavigationBar from "expo-navigation-bar";
import { Stack, usePathname } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { BackHandler, View } from "react-native";
import { PaperProvider } from "react-native-paper";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
	const path = usePathname();

	const [showDialog, setShowDialog] = useState(false);

	useEffect(() => {
		const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
			if (path === "/") {
				setShowDialog(true);
				return true;
			}
			// if (path === "/pages/test") {
			// cant go back on page "test"
			// 	return true;
			// }

			return false;
		});
		return () => backHandler.remove();
	}, [path]);

	useEffect(() => {
		NavigationBar.setVisibilityAsync("hidden");
	}, []);

	return (
		<PaperProvider>
			<StatusBar hidden />
			<View style={{ flex: 1, backgroundColor: AppTheme.dark.colors.background }}>
				<Stack>
					<Stack.Screen name="index" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/device/selector" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/player/selector" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/counter/layout.2" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/counter/layout.3" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/counter/layout.4" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/counter/layout.5" options={{ headerShown: false, animation: "fade" }} />
					<Stack.Screen name="pages/counter/layout.6" options={{ headerShown: false, animation: "fade" }} />
				</Stack>

				<LeaveApp showDialog={showDialog} setShowDialog={setShowDialog} />
			</View>
		</PaperProvider>
	);
}
