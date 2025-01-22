import LifeCounter from "@/components/lifeCounter";
import { AppTheme } from "@/theme/app.theme";
import React, { useEffect, useRef } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";

export default function Layout3() {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: 1,
			duration: 1500, // Change duration to 0.5 seconds
			useNativeDriver: true,
		}).start();
	}, [fadeAnim]);

	return (
		<View style={style.container}>
			<Animated.View style={[style.container, { opacity: fadeAnim, backgroundColor: AppTheme.dark.colors.background }]}>
				<View style={[style.row, { flex: 5 }]}>
					<View style={style.lifeCounterContainer}>
						<LifeCounter playerIndex={0} orientation="left" />
					</View>
					<View style={style.lifeCounterContainer}>
						<LifeCounter playerIndex={1} orientation="right" />
					</View>
				</View>

				<View style={[style.row, { flex: 3 }]}>
					<View style={style.lifeCounterContainer}>
						<LifeCounter playerIndex={2} orientation="bottom" />
					</View>
				</View>
			</Animated.View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppTheme.dark.colors.background,
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
	row: {
		flexDirection: "row",
	},
	lifeCounterContainer: {
		flex: 1,
		padding: 5,
	},
});
