import React from "react";

import { GraphicEditor } from "./components/editor";
import { BackgroundProvider } from "./context/background-context";
import { TextProvider } from "./context/text-context";

function App() {
	return (
		<BackgroundProvider>
			<TextProvider>
				<div className="w-full p-8 pb-0">
					<GraphicEditor />
				</div>
			</TextProvider>
		</BackgroundProvider>
	);
}

export default App;
