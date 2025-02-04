import { TriangleAlertIcon, X } from "lucide-react"; // Import the X icon
import { Button } from "../button";

type ResetConfirmModalProps = {
	handleReset: () => void;
	handleCancel: () => void;
};

export const ResetConfirmModal = ({ handleReset, handleCancel }: ResetConfirmModalProps) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="relative flex w-full max-w-[648px] flex-col items-center justify-center rounded-lg bg-white p-12">
				<button className="absolute right-9 top-9 rounded-full" onClick={handleCancel}>
					<X size={24} />
				</button>
				<div className="w-full text-center">
					<div className="items-center, mx-auto my-12 flex justify-center">
						<TriangleAlertIcon size={200} className="stroke-1 text-6xl text-red-600" />
					</div>
					<h2 className="mb-2 text-4xl font-bold uppercase">Warning</h2>
					<p className="mb-6 text-lg text-gray-700">
						You're about to reset whole process. Are you sure want to do it?
					</p>
					<div className="flex justify-center gap-2">
						<Button onClick={handleCancel} variant="secondary">
							Cancel
						</Button>
						<Button onClick={handleReset}>Reset</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
