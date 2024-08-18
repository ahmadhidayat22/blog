
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages from "./pages";
import { ThemeProvider } from "./utils/ThemeContext";
import routes from "./utils/routes";

function App() {
	
	return (
		<ThemeProvider>
			<div className="dark:bg-gray-800 dark:text-white ">

				<Router>
					<Routes>
            {routes.map(({ path, Component }, key) =>(
              
              <Route path={path} key={key} element={<Component />} />
            ))}
						{/* <Route path="/" Component={Home} />
						<Route path="/login" Component={Login} />
						<Route path="/register" Component={Registrasi} />
						<Route path="/posts" Component={Posts} />
						<Route path="/posts/:slug" Component={SinglePost} />
						<Route path="/*" Component={NotFound} /> */}
					</Routes>
				</Router>
			</div>
		</ThemeProvider>
	);
}

export default App;