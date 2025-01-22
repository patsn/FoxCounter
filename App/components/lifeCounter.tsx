import { AppTheme } from "@/theme/app.theme";
import { AppColors } from "@/theme/player.colors";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";

const colorByIndex = (index: number) => {
	switch (index) {
		case 0:
			return AppColors.playerColor1;
		case 1:
			return AppColors.playerColor2;
		case 2:
			return AppColors.playerColor3;
		case 3:
			return AppColors.playerColor4;
		case 4:
			return AppColors.playerColor5;
		case 5:
			return AppColors.playerColor6;
		default:
			return "#FFFFFF";
	}
};

const calcRotation = (orientation: "top" | "bottom" | "left" | "right") => {
	switch (orientation) {
		case "bottom":
			return { transform: [{ rotate: "0deg" }, { translateY: -10 }] };
		case "top":
			return { transform: [{ rotate: "180deg" }, { translateY: -10 }] };
		case "right":
			return { transform: [{ rotate: "-90deg" }, { translateY: -10 }] };
		case "left":
			return { transform: [{ rotate: "90deg" }, { translateY: -10 }] };
		default:
			return { transform: [{ rotate: "0deg" }, { translateY: -10 }] };
	}
};

export default function LifeCounter({ playerIndex, orientation }: { playerIndex: number; orientation: "top" | "bottom" | "left" | "right" }) {
	const [life, setLife] = useState(40);

	const handlePressTop = () => {
		setLife((prev) => prev + 1);
	};

	const handlePressBottom = () => {
		setLife((prev) => prev - 1);
	};

	const handleLongPressTop = () => {
		setLife((prev) => prev + 10);
	};

	const handleLongPressBottom = () => {
		setLife((prev) => prev - 10);
	};

	return (
		<View style={[style.card, { backgroundColor: colorByIndex(playerIndex) }]}>
			<Text style={[style.text, ...[calcRotation(orientation)]]}>{life}</Text>

			{["bottom", "top"].includes(orientation) && (
				<View style={style.touchableContainerH}>
					<TouchableOpacity
						style={[style.touchableH]}
						onPress={orientation === "bottom" ? handlePressTop : handlePressBottom}
						onLongPress={orientation === "bottom" ? handleLongPressTop : handleLongPressBottom}
					/>
					<TouchableOpacity
						style={[style.touchableH]}
						onPress={orientation === "bottom" ? handlePressBottom : handlePressTop}
						onLongPress={orientation === "bottom" ? handleLongPressBottom : handleLongPressTop}
					/>
				</View>
			)}

			{["left", "right"].includes(orientation) && (
				<View style={style.touchableContainerV}>
					<TouchableOpacity
						style={[style.touchableV]}
						onPress={orientation === "right" ? handlePressTop : handlePressBottom}
						onLongPress={orientation === "right" ? handleLongPressTop : handleLongPressBottom}
					/>
					<TouchableOpacity
						style={[style.touchableV]}
						onPress={orientation === "right" ? handlePressBottom : handlePressTop}
						onLongPress={orientation === "right" ? handleLongPressBottom : handleLongPressTop}
					/>
				</View>
			)}
		</View>
	);
}

const style = StyleSheet.create({
	card: {
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		height: "100%",
		width: "100%",
	},
	touchableContainerH: {
		...StyleSheet.absoluteFillObject,
	},
	touchableH: {
		flex: 1,
	},

	touchableContainerV: {
		...StyleSheet.absoluteFillObject,
		flexDirection: "row",
	},
	touchableV: {
		flex: 1,
	},

	text: {
		color: AppTheme.dark.colors.text,
		fontFamily: "Anton_400Regular",
		fontSize: 70,
	},
});
