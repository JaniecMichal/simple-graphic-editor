import { SyntheticEvent, useState } from "react";
import { useImage } from "@/context/image-context";
import { Rnd } from "react-rnd";
import { SizePicker } from "../size-picker";
import { RemoveElementButton } from "../remove-element-button";
import { PositionPicker } from "../position-picker";

export const ImageCanvas = ({ hideControls }: { hideControls: boolean }) => {
	const { images, updateImage, removeImage } = useImage();
	const [selectedId, setSelectedId] = useState<string | null>(null);

	if (images.length === 0) {
		return null;
	}

	return (
		<div id="image-canvas" className="relative h-full w-full" onClick={() => setSelectedId(null)}>
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
						!hideControls && selectedId === image.id ? "border-purple-500" : "border-transparent"
					}`}
					onClick={(e: SyntheticEvent) => {
						e.stopPropagation();
						setSelectedId(image.id);
					}}
				>
					{!hideControls && selectedId === image.id && (
						<>
							<PositionPicker />
							<RemoveElementButton
								removeElement={() => {
									removeImage(image.id);
								}}
							/>
							<SizePicker />
						</>
					)}

					<img src={image.src} alt="Uploaded" className="h-full w-full" />
				</Rnd>
			))}
		</div>
	);
};
