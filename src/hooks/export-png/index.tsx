import html2canvas from "html2canvas";
import { useRef } from "react";

export const useExportPNG = () => {
	const canvasRef = useRef<HTMLDivElement>(null);

	const handleExport = () => {
		if (canvasRef.current) {
			html2canvas(canvasRef.current).then((canvas) => {
				const link = document.createElement("a");
				link.href = canvas.toDataURL("image/png");
				link.download = "graphic.png";
				link.click();
			});
		}
	};

	return {
		canvasRef,
		handleExport,
	};
};
