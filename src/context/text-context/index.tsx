import { createContext, useContext, useState, ReactNode } from "react";

export type TextItem = {
	id: string;
	x: number;
	y: number;
	width: number;
	content: string;
	color: string;
	fontSize: number;
};

type TextContextType = {
	texts: TextItem[];
	addText: () => void;
	updateText: (id: string, updates: Partial<TextItem>) => void;
	removeText: (id: string) => void;
	clearTexts: () => void;
};

const TextContext = createContext<TextContextType | undefined>(undefined);

export const TextProvider = ({ children }: { children: ReactNode }) => {
	const [texts, setTexts] = useState<TextItem[]>([]);

	const addText = () => {
		setTexts((prev) => [
			...prev,
			{
				id: crypto.randomUUID(),
				x: 50,
				y: 50,
				width: 200,
				content: "Your text",
				color: "#000",
				fontSize: 24,
			},
		]);
	};

	const updateText = (id: string, updates: Partial<TextItem>) => {
		setTexts((prev) => prev.map((text) => (text.id === id ? { ...text, ...updates } : text)));
	};

	const removeText = (id: string) => {
		setTexts((prev) => prev.filter((text) => text.id !== id));
	};

	const clearTexts = () => {
		setTexts([]);
	};

	return (
		<TextContext.Provider value={{ texts, addText, updateText, removeText, clearTexts }}>
			{children}
		</TextContext.Provider>
	);
};

export const useText = (): TextContextType => {
	const context = useContext(TextContext);
	if (!context) {
		throw new Error("useText must be used within a TextProvider");
	}
	return context;
};
