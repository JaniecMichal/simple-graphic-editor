import Logo from "@/assets/logo.svg";

export const LogoHeader = () => {
	return (
		<div className="flex items-center">
			<Logo className="mr-2 h-8 w-8 md:h-12 md:w-12" style={{ fill: "#7209B7" }} />
			<h1 className="text-[24px] font-bold text-gray-600 md:text-[32px]">CanvasEditor</h1>
		</div>
	);
};
