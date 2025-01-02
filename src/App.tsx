import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import "./style/globals.css";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
}

export default App;
