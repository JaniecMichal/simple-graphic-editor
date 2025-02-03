import { LogoHeader } from "../../components/logo";
import { useBackground } from "@/context/background-context";
import { BackgroundColorPicker } from "../../components/background-picker";
import { TextCanvas } from "../../components/text-canvas";
import { TextPicker } from "../../components/text-picker";
import { ImagePicker } from "../../components/image-picker";
import { ImageCanvas } from "../../components/image-canvas";
import { useText } from "@/context/text-context";
import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import { Button } from "@/components/export-button";

export const GraphicEditor = () => {
	const { bgColor, setBgColor } = useBackground();
	const { texts } = useText();
	const [selectedTextId, setSelectedTextId] = useState<string | null>(null);

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

	return (
		<div className="flex h-[900px] w-full justify-center gap-6">
			<div
				ref={canvasRef}
				className="relative h-full w-1/2"
				style={{ backgroundColor: bgColor }}
				onClick={() => setSelectedTextId(null)}
			>
				<div className="absolute inset-0 z-0">
					<ImageCanvas />
				</div>

				{texts.length > 0 && (
					<div className="pointer-events-none absolute inset-0 z-20">
						<TextCanvas selectedTextId={selectedTextId} setSelectedTextId={setSelectedTextId} />
					</div>
				)}
			</div>

			<div className="w-1/2 bg-white p-4 shadow-md">
				<LogoHeader />
				<div className="my-4 w-full rounded-lg bg-gray-50 px-4 py-6">
					<h2 className="text-lg font-bold text-gray-600">Add content</h2>
				</div>
				<div className="grid grid-cols-2 gap-4 pb-16">
					<BackgroundColorPicker bgColor={bgColor} setBgColor={setBgColor} />
					<ImagePicker />
					<TextPicker />
				</div>
				<div className="mt-16 flex justify-end">
					<Button onClick={handleExport}>Export do PNG</Button>
				</div>
			</div>
		</div>
	);
};
