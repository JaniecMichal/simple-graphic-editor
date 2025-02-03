import { Move } from "lucide-react";

export const PositionPicker = () => (
	<div className="absolute -left-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow">
		<Move size={16} className="text-gray-600" />
	</div>
);
