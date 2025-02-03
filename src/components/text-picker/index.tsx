import TextIcon from "@assets/text.svg";

import { useText } from "@/context/text-context";
import { ActionTile } from "../action-tile";

export const TextPicker = () => {
	const { addText } = useText();

	return <ActionTile iconSrc={TextIcon} label="Text" onClick={addText} />;
};
