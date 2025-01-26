import { create } from "zustand";

export interface AppSettings {
	startLife: number;
	setStartLife: (value: number) => void;

	playerAmmount: number;
	setPlayerAmmount: (value: number) => void;

	showEDH: boolean;
	setShowEDH: (value: boolean) => void;

	randomPlayer: boolean;
	setRandomPlayer: (value: boolean) => void;
}

export const useAppSettings = create<AppSettings>((set) => ({
	startLife: 40,
	setStartLife: (value) => set({ startLife: value }),

	playerAmmount: 4,
	setPlayerAmmount: (value) => set({ playerAmmount: value }),

	showEDH: true,
	setShowEDH: (value) => set({ showEDH: value }),

	randomPlayer: false,
	setRandomPlayer: (value) => set({ randomPlayer: value }),
}));
