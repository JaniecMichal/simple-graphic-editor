import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	variant?: "primary" | "secondary";
}

export const Button = ({
	onClick,
	children,
	variant = "primary",
	className,
	...rest
}: ButtonProps) => {
	const baseClasses = "rounded-md px-8 py-2";
	const primaryClasses = "bg-[#7209B7] text-white";
	const secondaryClasses = "bg-transparent text-gray-800";

	const variantClasses = variant === "primary" ? primaryClasses : secondaryClasses;

	return (
		<button
			onClick={onClick}
			className={`${baseClasses} ${variantClasses} ${className || ""}`}
			{...rest}
		>
			{children}
		</button>
	);
};
