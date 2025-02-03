import { SyntheticEvent, useState } from "react";
import { useImage } from "@/context/image-context";
import { Rnd } from "react-rnd";
import { Move, Trash2 } from "lucide-react";

export const ImageCanvas = () => {
	const { images, updateImage, removeImage } = useImage();
	const [selectedId, setSelectedId] = useState<string | null>(null);

	if (images.length === 0) {
		return null;
	}

	return (
		<div
			id="image-canvas"
			className="relative h-full w-full overflow-hidden"
			onClick={() => setSelectedId(null)}
		>
			{images.map((image) => (
				<Rnd
					key={image.id}
					bounds="parent"
					size={{ width: image.width, height: image.height }}
					position={{ x: image.x, y: image.y }}
					onDragStop={(_, d) => updateImage(image.id, { x: d.x, y: d.y })}
					onResize={(_, __, ref, ___, position) => {
						updateImage(image.id, {
							width: ref.offsetWidth,
							height: ref.offsetHeight,
							x: position.x,
							y: position.y,
						});
					}}
					style={{ zIndex: 0 }}
					className={`relative border ${
						selectedId === image.id ? "border-purple-500" : "border-transparent"
					}`}
					onClick={(e: SyntheticEvent) => {
						e.stopPropagation();
						setSelectedId(image.id);
					}}
				>
					{selectedId === image.id && (
						<>
							<div className="absolute -left-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
								<Move size={16} className="text-gray-600" />
							</div>
							<button
								className="absolute -right-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"
								onClick={(e) => {
									e.stopPropagation();
									removeImage(image.id);
								}}
							>
								<Trash2 size={16} className="text-red-600" />
							</button>
							<div className="absolute -bottom-2 -right-2 h-6 w-6 rounded-full bg-purple-500"></div>
						</>
					)}

					<img src={image.src} alt="Uploaded" className="h-full w-full object-contain" />
				</Rnd>
			))}
		</div>
	);
};
