import { TriangleAlertIcon } from "lucide-react";
import { Button } from "../button";

type ResetConfirmModalProps = {
	handleReset: () => void;
	handleCancel: () => void;
};

export const ResetConfirmModal = ({ handleReset, handleCancel }: ResetConfirmModalProps) => {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="w-96 rounded-lg bg-white p-8 text-center">
				<div className="items-center, mx-auto mb-4 flex justify-center">
					<TriangleAlertIcon size={200} className="text-6xl text-red-600" />
				</div>
				<h2 className="mb-2 text-2xl font-bold">Warning</h2>
				<p className="mb-6">You're about to reset whole process. Are you sure want to do it?</p>
				<div className="flex justify-around">
					<Button onClick={handleCancel} variant="secondary">
						Cancel
					</Button>
					<Button onClick={handleReset}>Reset</Button>
				</div>
			</div>
		</div>
	);
};
