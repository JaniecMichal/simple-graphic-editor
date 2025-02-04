import React, { useRef } from "react";
import { useImage } from "@/context/image-context";
import { ActionTile } from "@/components/action-tile";
import ImageIcon from "@/assets/image.svg";

export const ImagePicker = () => {
	const { addImage } = useImage();
	const fileInputRef = useRef<HTMLInputElement>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files && files[0]) {
			addImage(files[0]);
			e.target.value = "";
		}
	};

	return (
		<>
			<ActionTile
				icon={<ImageIcon className="h-16 w-16 sm:h-24 sm:w-24" />}
				label="Image"
				onClick={() => fileInputRef.current?.click()}
			/>

			<input
				type="file"
				accept="image/*"
				ref={fileInputRef}
				onChange={handleFileChange}
				style={{ display: "none" }}
			/>
		</>
	);
};
