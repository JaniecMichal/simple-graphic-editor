import { SyntheticEvent } from "react";
import { useText } from "@/context/text-context";
import { Rnd } from "react-rnd";
import { PositionPicker } from "../position-picker";
import { RemoveElementButton } from "../remove-element-button";
import { SizePicker } from "../size-picker";

interface TextCanvasProps {
	selectedTextId: string | null;
	setSelectedTextId: (id: string | null) => void;
	hideControls: boolean;
}

export const TextCanvas = ({
	selectedTextId,
	setSelectedTextId,
	hideControls,
}: TextCanvasProps) => {
	const { texts, updateText, removeText } = useText();

	return (
		<div id="canvas" className="relative h-full w-full">
			{texts.map((text) => (
				<Rnd
					key={text.id}
					bounds="parent"
					size={{ width: text.width, height: "auto" }}
					position={{ x: text.x, y: text.y }}
					onDragStop={(_, d) => updateText(text.id, { x: d.x, y: d.y })}
					onResize={(_, __, ref) => {
						const newWidth = ref.offsetWidth;
						const scaleFactor = newWidth / text.width;
						const newFontSize = text.fontSize * scaleFactor;
						updateText(text.id, { width: newWidth, fontSize: newFontSize });
					}}
					className={`pointer-events-auto relative border ${
						!hideControls && selectedTextId === text.id ? "border-purple-500" : "border-transparent"
					}`}
					onClick={(e: SyntheticEvent) => {
						e.stopPropagation();
						setSelectedTextId(text.id);
					}}
					style={{ zIndex: 20 }}
				>
					{!hideControls && selectedTextId === text.id && (
						<>
							<PositionPicker />
							<RemoveElementButton
								removeElement={() => {
									removeText(text.id);
								}}
							/>
							<SizePicker />
						</>
					)}

					<p
						contentEditable
						suppressContentEditableWarning
						onBlur={(e) =>
							updateText(text.id, {
								content: e.currentTarget.innerText,
							})
						}
						className="text-center outline-none"
						style={{
							color: text.color,
							fontSize: text.fontSize,
							whiteSpace: "pre-wrap",
						}}
					>
						{text.content}
					</p>

					{!hideControls && selectedTextId === text.id && (
						<div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
							{["#000", "#fff", "#f00", "#00f", "#0f0"].map((color) => (
								<button
									key={color}
									className="h-4 w-4 rounded-full border"
									style={{ backgroundColor: color }}
									onClick={(e) => {
										e.stopPropagation();
										updateText(text.id, { color });
									}}
								/>
							))}
						</div>
					)}
				</Rnd>
			))}
		</div>
	);
};
