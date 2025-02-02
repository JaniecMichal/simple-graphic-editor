import { createContext, useContext, useState, ReactNode } from "react";

type BackgroundContextType = {
	bgColor: string;
	setBgColor: (color: string) => void;
};

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined);

interface BackgroundProviderProps {
	children: ReactNode;
}

export const BackgroundProvider = ({ children }: BackgroundProviderProps) => {
	const [bgColor, setBgColor] = useState<string>("#f3f4f6");

	return (
		<BackgroundContext.Provider value={{ bgColor, setBgColor }}>
			{children}
		</BackgroundContext.Provider>
	);
};

export const useBackground = (): BackgroundContextType => {
	const context = useContext(BackgroundContext);
	if (!context) {
		throw new Error("useBackground must be used within a BackgroundProvider");
	}
	return context;
};
