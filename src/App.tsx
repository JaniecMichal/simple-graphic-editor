import React from "react";

import { GraphicEditor } from "./components/editor";
import { BackgroundProvider } from "./context/background-context";

function App() {
	return (
		<BackgroundProvider>
			<div className="w-full p-8 pb-0">
				<GraphicEditor />
			</div>
		</BackgroundProvider>
	);
}

export default App;
