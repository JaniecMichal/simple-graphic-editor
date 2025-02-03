import { Trash2 } from "lucide-react";

type RemoveElementButtonType = {
	removeElement: () => void;
};

export const RemoveElementButton = ({ removeElement }: RemoveElementButtonType) => {
	return (
		<button
			className="absolute -right-4 -top-4 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow"
			onClick={(e) => {
				e.stopPropagation();
				removeElement();
			}}
		>
			<Trash2 size={16} className="text-red-600" />
		</button>
	);
};
