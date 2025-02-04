import React, { ButtonHTMLAttributes } from "react";
import ResetIcon from "@/assets/reset.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const ResetButton = ({ onClick, children, className, ...rest }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="md: relative flex items-center gap-2 bg-transparent py-2 text-red-700 md:gap-3"
			{...rest}
		>
			{children}
			<ResetIcon className="h-3 w-3 text-red-700 md:h-6 md:w-6" />

			<span className="absolute bottom-0 left-0 h-0.5 w-full translate-y-1/2 bg-red-700"></span>
		</button>
	);
};
