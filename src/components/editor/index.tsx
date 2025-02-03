import { LogoHeader } from "../logo";
import { useBackground } from "@/context/background-context";
import { BackgroundColorPicker } from "../background-picker";
import { TextCanvas } from "../text-canvas";
import { TextPicker } from "../text-picker";
import { ImagePicker } from "../image-picker";
import { ImageCanvas } from "../image-canvas";
import { useText } from "@/context/text-context";
import { useState } from "react";

export const GraphicEditor = () => {
	const { bgColor, setBgColor } = useBackground();
	const { texts } = useText();
	const [selectedTextId, setSelectedTextId] = useState<string | null>(null);

	return (
		<div className="flex h-[900px] w-full justify-center gap-6">
			<div
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
				<div className="grid grid-cols-2 gap-4">
					<BackgroundColorPicker bgColor={bgColor} setBgColor={setBgColor} />
					<ImagePicker />
					<TextPicker />
				</div>
			</div>
		</div>
	);
};
