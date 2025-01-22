import { BackHandler } from "react-native";
import { Button, Dialog, Paragraph, Portal } from "react-native-paper";

export default function LeaveApp({ showDialog, setShowDialog }: { showDialog: boolean; setShowDialog: (showDialog: boolean) => void }): JSX.Element {
	return (
		<Portal>
			<Dialog visible={showDialog} onDismiss={() => setShowDialog(false)}>
				<Dialog.Title>Leave App</Dialog.Title>
				<Dialog.Content>
					<Paragraph>Are you sure you want to leave the app?</Paragraph>
				</Dialog.Content>
				<Dialog.Actions>
					<Button onPress={() => setShowDialog(false)}>No</Button>
					<Button onPress={() => BackHandler.exitApp()}>Yes</Button>
				</Dialog.Actions>
			</Dialog>
		</Portal>
	);
}
