import React from "react";

type ActionTileProps = {
	iconSrc?: string;
	label: string;
	onClick?: () => void;
	children?: React.ReactNode;
};
export const ActionTile = ({ iconSrc, label, onClick, children }: ActionTileProps) => {
	return (
		<div className="p-4shadow-md relative h-[256px] w-full cursor-pointer rounded-lg bg-gray-50 pt-16 hover:bg-gray-100">
			<button
				className="flex h-full w-full flex-col items-center justify-center gap-6"
				onClick={onClick}
			>
				<img src={iconSrc} alt={label} className="h-24 w-24" />

				<span className="pb-[12px] text-center text-lg font-medium text-gray-700">{label}</span>

				{children && (
					<div className="absolute inset-0 flex items-center justify-center">{children}</div>
				)}
			</button>
		</div>
	);
};
