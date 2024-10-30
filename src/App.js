import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Imprint from "./pages/Imprint";
import Policy from "./pages/Policy";
import Career from "./pages/Career";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/imprint" element={<Imprint />} />
					<Route path="/career" element={<Career />} />
					<Route path="/policy" element={<Policy />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
