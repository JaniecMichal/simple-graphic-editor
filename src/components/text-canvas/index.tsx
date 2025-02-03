import { SyntheticEvent } from "react";
import { useText } from "@/context/text-context";
import { Rnd } from "react-rnd";
import { Move, Trash2 } from "lucide-react";

interface TextCanvasProps {
	selectedTextId: string | null;
	setSelectedTextId: (id: string | null) => void;
}

export const TextCanvas = ({ selectedTextId, setSelectedTextId }: TextCanvasProps) => {
	const { texts, updateText, removeText } = useText();

	return (
		<div id="canvas" className="relative h-full w-full overflow-hidden">
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
					// Upewniamy się, że interaktywne elementy mają pointer-events: auto
					className={`pointer-events-auto relative border ${
						selectedTextId === text.id ? "border-purple-500" : "border-transparent"
					}`}
					onClick={(e: SyntheticEvent) => {
						e.stopPropagation();
						setSelectedTextId(text.id);
					}}
					style={{ zIndex: 20 }}
				>
					{selectedTextId === text.id && (
						<>
							<div className="absolute -left-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
								<Move size={16} className="text-gray-600" />
							</div>
							<button
								className="absolute -right-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"
								onClick={(e) => {
									e.stopPropagation();
									removeText(text.id);
								}}
							>
								<Trash2 size={16} className="text-red-600" />
							</button>
							<div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-purple-500"></div>
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

					{selectedTextId === text.id && (
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
