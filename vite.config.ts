// https://vite.dev/config/
export default {
	server: {
		proxy: {
			"/news": "http://localhost:3000", // Proxy vers l'API sur le port 3000
		},
	},
};
