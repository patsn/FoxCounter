import { usePlayerLife } from "@/store/life.store";
import { useAppSettings } from "@/store/settings.store";
import { AppTheme } from "@/theme/app.theme";
import { AppColors } from "@/theme/player.colors";
import React, { useEffect } from "react";
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
	const { startLife } = useAppSettings();
	const { player0, player1, player2, player3, player4, player5, setPlayer0, setPlayer1, setPlayer2, setPlayer3, setPlayer4, setPlayer5 } =
		usePlayerLife();

	useEffect(() => {
		switch (playerIndex) {
			case 0:
				setPlayer0({ life: startLife });
				break;
			case 1:
				setPlayer1({ life: startLife });
				break;
			case 2:
				setPlayer2({ life: startLife });
				break;
			case 3:
				setPlayer3({ life: startLife });
				break;
			case 4:
				setPlayer4({ life: startLife });
				break;
			case 5:
				setPlayer5({ life: startLife });
				break;
		}
	}, [startLife]);

	const handlePressTop = () => {
		switch (playerIndex) {
			case 0:
				setPlayer0({ life: player0.life + 1 });
				break;
			case 1:
				setPlayer1({ life: player1.life + 1 });
				break;
			case 2:
				setPlayer2({ life: player2.life + 1 });
				break;
			case 3:
				setPlayer3({ life: player3.life + 1 });
				break;
			case 4:
				setPlayer4({ life: player4.life + 1 });
				break;
			case 5:
				setPlayer5({ life: player5.life + 1 });
				break;
		}
	};

	const handlePressBottom = () => {
		switch (playerIndex) {
			case 0:
				setPlayer0({ life: player0.life - 1 });
				break;
			case 1:
				setPlayer1({ life: player1.life - 1 });
				break;
			case 2:
				setPlayer2({ life: player2.life - 1 });
				break;
			case 3:
				setPlayer3({ life: player3.life - 1 });
				break;
			case 4:
				setPlayer4({ life: player4.life - 1 });
				break;
			case 5:
				setPlayer5({ life: player5.life - 1 });
				break;
		}
	};

	const handleLongPressTop = () => {
		switch (playerIndex) {
			case 0:
				setPlayer0({ life: player0.life + 10 });
				break;
			case 1:
				setPlayer1({ life: player1.life + 10 });
				break;
			case 2:
				setPlayer2({ life: player2.life + 10 });
				break;
			case 3:
				setPlayer3({ life: player3.life + 10 });
				break;
			case 4:
				setPlayer4({ life: player4.life + 10 });
				break;
			case 5:
				setPlayer5({ life: player5.life + 10 });
				break;
		}
	};

	const handleLongPressBottom = () => {
		switch (playerIndex) {
			case 0:
				setPlayer0({ life: player0.life - 10 });
				break;
			case 1:
				setPlayer1({ life: player1.life - 10 });
				break;
			case 2:
				setPlayer2({ life: player2.life - 10 });
				break;
			case 3:
				setPlayer3({ life: player3.life - 10 });
				break;
			case 4:
				setPlayer4({ life: player4.life - 10 });
				break;
			case 5:
				setPlayer5({ life: player5.life - 10 });
				break;
		}
	};

	return (
		<View style={[style.card, { backgroundColor: colorByIndex(playerIndex) }]}>
			<Text style={[style.text, ...[calcRotation(orientation)]]}>
				{playerIndex === 0 && player0.life}
				{playerIndex === 1 && player1.life}
				{playerIndex === 2 && player2.life}
				{playerIndex === 3 && player3.life}
				{playerIndex === 4 && player4.life}
				{playerIndex === 5 && player5.life}
			</Text>

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
