import LifeCounter from "@/components/lifeCounter";
import { AppTheme } from "@/theme/app.theme";
import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, View } from "react-native";

export default function Layout2() {
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
				<View style={style.lifeCounterContainer}>
					<LifeCounter playerIndex={1} orientation="bottom" />
				</View>
			</Animated.View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: AppTheme.dark.colors.background,
	},
	lifeCounterContainer: {
		flex: 1,
		paddingLeft: 5,
		paddingRight: 5,
		paddingTop: 2.5,
		paddingBottom: 5,
	},
});
