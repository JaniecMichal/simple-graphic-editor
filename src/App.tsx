import React from "react";

import { BackgroundProvider } from "@/context/background-context";
import { TextProvider } from "@/context/text-context";
import { ImageProvider } from "@/context/image-context";
import { GraphicEditor } from "@/views/editor";

function App() {
	return (
		<BackgroundProvider>
			<TextProvider>
				<ImageProvider>
					<div className="w-full p-8 pb-0">
						<GraphicEditor />
					</div>
				</ImageProvider>
			</TextProvider>
		</BackgroundProvider>
	);
}

export default App;
