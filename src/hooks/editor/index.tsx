import { useState, type RefObject } from "react";

import { useBackground } from "@/context/background-context";
import { useImage } from "@/context/image-context";
import { TextItem, useText } from "@/context/text-context";

import { useExportPNG } from "../export-png";

export interface UseEditorReturn {
	selectedTextId: string | null;
	isExporting: boolean;
	showResetModal: boolean;
	bgColor: string;
	texts: TextItem[];
	canvasRef: RefObject<HTMLDivElement>;
	onExport: () => Promise<void>;
	handleResetClick: () => void;
	handleModalReset: () => void;
	handleModalCancel: () => void;
	setSelectedTextId: (id: string | null) => void;
	setBgColor: (id: string) => void;
}

export const useEditor = (): UseEditorReturn => {
	const [selectedTextId, setSelectedTextId] = useState<string | null>(null);
	const [isExporting, setIsExporting] = useState<boolean>(false);
	const [showResetModal, setShowResetModal] = useState<boolean>(false);

	const { bgColor, setBgColor } = useBackground();
	const { texts, clearTexts } = useText();
	const { clearImages } = useImage();
	const { canvasRef, handleExport } = useExportPNG();

	const onExport = async (): Promise<void> => {
		setSelectedTextId(null);
		setIsExporting(true);
		await handleExport();
		setIsExporting(false);
	};

	const resetCanvas = (): void => {
		clearTexts();
		clearImages();
		setBgColor("#ffffff");
	};

	const handleResetClick = (): void => {
		setShowResetModal(true);
	};

	const handleModalReset = (): void => {
		resetCanvas();
		setShowResetModal(false);
	};

	const handleModalCancel = (): void => {
		setShowResetModal(false);
	};

	return {
		selectedTextId,
		isExporting,
		showResetModal,
		bgColor,
		texts,
		canvasRef,
		onExport,
		handleResetClick,
		handleModalReset,
		handleModalCancel,
		setBgColor,
		setSelectedTextId,
	};
};
