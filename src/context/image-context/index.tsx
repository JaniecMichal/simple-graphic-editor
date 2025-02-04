import React, { createContext, useContext, useState } from "react";

export interface ImageItem {
	id: string;
	src: string;
	x: number;
	y: number;
	width: number;
	height: number;
}

interface ImageContextType {
	images: ImageItem[];
	addImage: (file: File, initialPosition?: { x: number; y: number }) => void;
	updateImage: (id: string, updates: Partial<ImageItem>) => void;
	removeImage: (id: string) => void;
	clearImages: () => void;
}

const ImageContext = createContext<ImageContextType | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [images, setImages] = useState<ImageItem[]>([]);

	const addImage = (file: File, initialPosition = { x: 50, y: 50 }) => {
		const reader = new FileReader();
		reader.onload = () => {
			const src = reader.result as string;
			const newImage: ImageItem = {
				id: Date.now().toString(), // uproszczony generator ID, można użyć np. uuid
				src,
				x: initialPosition.x,
				y: initialPosition.y,
				width: 200, // domyślna szerokość
				height: 200, // domyślna wysokość
			};
			setImages((prev) => [...prev, newImage]);
		};
		reader.readAsDataURL(file);
	};

	const updateImage = (id: string, updates: Partial<ImageItem>) => {
		setImages((prev) => prev.map((img) => (img.id === id ? { ...img, ...updates } : img)));
	};

	const removeImage = (id: string) => {
		setImages((prev) => prev.filter((img) => img.id !== id));
	};

	const clearImages = () => {
		setImages([]);
	};

	return (
		<ImageContext.Provider value={{ images, addImage, updateImage, removeImage, clearImages }}>
			{children}
		</ImageContext.Provider>
	);
};

export const useImage = () => {
	const context = useContext(ImageContext);
	if (!context) {
		throw new Error("useImage must be used within an ImageProvider");
	}
	return context;
};
