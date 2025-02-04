import React from "react";

type ActionTileProps = {
	icon?: React.ReactElement;
	label: string;
	onClick?: () => void;
	children?: React.ReactNode;
};

export const ActionTile = ({ icon, label, onClick, children }: ActionTileProps) => {
	return (
		<div
			className="relative h-[200px] w-full cursor-pointer rounded-lg bg-gray-50 pt-12 shadow-md hover:bg-gray-100 sm:h-[256px] sm:pt-16"
			onClick={onClick}
		>
			<div className="flex h-full w-full flex-col items-center justify-center gap-4 sm:gap-6">
				{icon && <span className="h-16 w-16 sm:h-24 sm:w-24">{icon}</span>}
				<span className="pb-3 text-center text-base font-medium text-gray-700 sm:text-lg">
					{label}
				</span>
			</div>
			{children && (
				<div className="absolute inset-0 flex items-center justify-center">{children}</div>
			)}
		</div>
	);
};
