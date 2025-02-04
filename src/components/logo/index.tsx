import Logo from "@/assets/logo.svg";

export const LogoHeader = () => {
	return (
		<div className="mb-4 flex items-center">
			<Logo className="mr-2 h-12 w-12" style={{ fill: "#7209B7" }} />
			<h1 className="text-[32px] font-bold text-gray-600">CanvasEditor</h1>
		</div>
	);
};
