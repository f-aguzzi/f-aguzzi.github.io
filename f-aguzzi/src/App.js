import { Route, BrowserRouter as Router, Routes as Switch } from "react-router-dom";

import FrontPage from "./FrontPage";
import MainPage from "./MainPage";


function App() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" element={<FrontPage />} />
				<Route exact path="/mainpage" element={<MainPage />} />
			</Switch>
		</Router>
	);
}

export default App;
