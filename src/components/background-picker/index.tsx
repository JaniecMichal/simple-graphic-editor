import BgIcon from "../../assets/bg.svg";
import { ActionTile } from "../action-tile";

interface BackgroundColorPickerProps {
	bgColor: string;
	setBgColor: (color: string) => void;
}

export const BackgroundColorPicker = ({ bgColor, setBgColor }: BackgroundColorPickerProps) => {
	return (
		<ActionTile icon={<BgIcon className="h-16 w-16 sm:h-24 sm:w-24" />} label="Background">
			<input
				type="color"
				value={bgColor}
				onChange={(e) => setBgColor(e.target.value)}
				className="absolute h-full w-full cursor-pointer opacity-0"
			/>
		</ActionTile>
	);
};
