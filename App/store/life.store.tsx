import { create } from "zustand";
import { useAppSettings } from "./settings.store";

export interface AppSettings {
	player0: {
		life: number;
	};
	setPlayer0: (value: { life: number }) => void;

	player1: {
		life: number;
	};
	setPlayer1: (value: { life: number }) => void;

	player2: {
		life: number;
	};
	setPlayer2: (value: { life: number }) => void;

	player3: {
		life: number;
	};
	setPlayer3: (value: { life: number }) => void;

	player4: {
		life: number;
	};
	setPlayer4: (value: { life: number }) => void;

	player5: {
		life: number;
	};
	setPlayer5: (value: { life: number }) => void;
}

export const usePlayerLife = create<AppSettings>((set) => ({
	player0: { life: 40 },
	setPlayer0: (value) => set({ player0: value }),

	player1: { life: 40 },
	setPlayer1: (value) => set({ player1: value }),

	player2: { life: 40 },
	setPlayer2: (value) => set({ player2: value }),

	player3: { life: 40 },
	setPlayer3: (value) => set({ player3: value }),

	player4: { life: 40 },
	setPlayer4: (value) => set({ player4: value }),

	player5: { life: 40 },
	setPlayer5: (value) => set({ player5: value }),
}));
