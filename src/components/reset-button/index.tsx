import React, { ButtonHTMLAttributes } from "react";
import ResetIcon from "@/assets/reset.svg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const ResetButton = ({ onClick, children, className, ...rest }: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className="relative flex gap-3 bg-transparent py-2 text-red-700" // Add 'relative' class
			{...rest}
		>
			{children}
			<ResetIcon className="h-6 w-6 text-red-700" />

			<span className="absolute bottom-0 left-0 h-0.5 w-full translate-y-1/2 bg-red-700"></span>
		</button>
	);
};
