import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
}

export const Button = ({ onClick, children, ...rest }: ButtonProps) => {
	return (
		<button onClick={onClick} className="rounded-md bg-[#7209B7] px-4 py-2 text-white" {...rest}>
			{children}
		</button>
	);
};
