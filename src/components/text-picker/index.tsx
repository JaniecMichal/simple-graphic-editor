import TextIcon from "@assets/text.svg";

import { useText } from "@/context/text-context";
import { ActionTile } from "../action-tile";

export const TextPicker = () => {
	const { addText } = useText();

	return (
		<ActionTile
			icon={<TextIcon className="h-16 w-16 sm:h-24 sm:w-24" />}
			label="Text"
			onClick={addText}
		/>
	);
};
