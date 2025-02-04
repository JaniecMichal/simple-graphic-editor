import {
	LogoHeader,
	BackgroundColorPicker,
	TextCanvas,
	TextPicker,
	ImagePicker,
	ImageCanvas,
	Button,
} from "@/components";
import { ResetConfirmModal } from "@/components/reset-confirm-modal";

import { useEditor } from "@/hooks/editor";

export const GraphicEditor = () => {
	const {
		selectedTextId,
		isExporting,
		showResetModal,
		bgColor,
		texts,
		canvasRef,
		onExport,
		handleResetClick,
		handleModalReset,
		handleModalCancel,
		setSelectedTextId,
		setBgColor,
	} = useEditor();

	return (
		<div className="flex h-[900px] w-full justify-center gap-6">
			<div
				ref={canvasRef}
				className="relative h-full w-1/2"
				style={{ backgroundColor: bgColor }}
				onClick={() => setSelectedTextId(null)}
			>
				<div className="absolute inset-0 z-0">
					<ImageCanvas hideControls={isExporting} />
				</div>

				{texts.length > 0 && (
					<div className="pointer-events-none absolute inset-0 z-20">
						<TextCanvas
							selectedTextId={selectedTextId}
							setSelectedTextId={setSelectedTextId}
							hideControls={isExporting}
						/>
					</div>
				)}
			</div>

			<div className="w-1/2 bg-white p-4 shadow-md">
				<div className="flex items-center justify-between">
					<LogoHeader />
					<Button onClick={handleResetClick}>Reset Canvas</Button>
				</div>
				<div className="my-4 w-full rounded-lg bg-gray-50 px-4 py-6">
					<h2 className="text-lg font-bold text-gray-600">Add content</h2>
				</div>
				<div className="grid grid-cols-2 gap-4 pb-16">
					<BackgroundColorPicker bgColor={bgColor} setBgColor={setBgColor} />
					<ImagePicker />
					<TextPicker />
				</div>
				<div className="mt-16 flex justify-end">
					<Button onClick={onExport}>Export do PNG</Button>
				</div>
			</div>
			{showResetModal && (
				<ResetConfirmModal handleCancel={handleModalCancel} handleReset={handleModalReset} />
			)}
		</div>
	);
};
