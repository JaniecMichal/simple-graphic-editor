import html2canvas from "html2canvas";
import { useRef } from "react";

export const useExportPNG = () => {
	const canvasRef = useRef<HTMLDivElement>(null);

	const handleExport = () => {
		if (canvasRef.current) {
			html2canvas(canvasRef.current).then((canvas) => {
				const desiredWidth = 1080;
				const desiredHeight = 1350;

				const scaledCanvas = document.createElement("canvas");
				scaledCanvas.width = desiredWidth;
				scaledCanvas.height = desiredHeight;
				const ctx = scaledCanvas.getContext("2d");

				if (ctx) {
					ctx.drawImage(
						canvas,
						0,
						0,
						canvas.width,
						canvas.height,
						0,
						0,
						desiredWidth,
						desiredHeight,
					);
				}

				const link = document.createElement("a");
				link.href = scaledCanvas.toDataURL("image/png");
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
