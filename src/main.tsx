// Import necessary modules from React and React Router
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Apropos from "./components/Apropos";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Environnement from "./pages/Environnement";
import Societe from "./pages/Societe";

/* ************************************************************************* */

// Import the main app component

// Import additional components for new routes
// Try creating these components in the "pages" folder

// import About from "./pages/About";
// import Contact from "./pages/Contact";

/* ************************************************************************* */

// Create router configuration with routes
// You can add more routes as you build out your app!
const router = createBrowserRouter([
	{
		path: "/", // The root path
		element: <App />, // Renders the App component for the home page
		children: [
			{
				path: "/",
				element: <Accueil />,
				loader: async () => {
					const response = await fetch("/news");
					if (!response.ok) {
						throw new Error("Failed to fetch news");
					}
					return response.json();
				},
			},
			{
				path: "/accueil",
				element: <Accueil />,
				loader: async () => {
					const response = await fetch("/news");
					if (!response.ok) {
						throw new Error("Failed to fetch news");
					}
					return response.json();
				},
			},
			{
				path: "/societe",
				element: <Societe />,
				loader: () => fetch("/news"),
			},
			{
				path: "/environnement",
				element: <Environnement />,
				loader: () => fetch("/news"),
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{ path: "/apropos", element: <Apropos /> },
		],
	},
	// Try adding a new route! For example, "/about" with an About component
]);

/* ************************************************************************* */

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
	throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);

/**
 * Helpful Notes:
 *
 * 1. Adding More Routes:
 *    To add more pages to your app, first create a new component (e.g., About.tsx).
 *    Then, import that component above like this:
 *
 *    import About from "./pages/About";
 *
 *    Add a new route to the router:
 *
 *      {
 *        path: "/about",
 *        element: <About />,  // Renders the About component
 *      }
 *
 * 2. Try Nested Routes:
 *    For more complex applications, you can nest routes. This lets you have sub-pages within a main page.
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#nested-routes
 *
 * 3. Experiment with Dynamic Routes:
 *    You can create routes that take parameters (e.g., /users/:id).
 *    Documentation: https://reactrouter.com/en/main/start/tutorial#url-params-in-loaders
 */