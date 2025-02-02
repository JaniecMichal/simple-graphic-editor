import BgIcon from "../../assets/logo.svg";

export const LogoHeader = () => {
	return (
		<div className="mb-4 flex items-center">
			<img
				src={BgIcon}
				alt="Logo"
				className="mr-2 h-8 w-8"
				style={{ filter: "grayscale(100%)", color: "#7209B7" }}
			/>
			<h2 className="text-xl font-bold text-gray-600">CanvasEditor</h2>
		</div>
	);
};
