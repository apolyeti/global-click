import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
	colors: {
		brand: {
			secondary: "#575048",
			primary: "#8A6D49",
		},
	},
	styles: {
		global: () => ({
			html: {
				height: "100%",
			},
			body: {
				fontFamily:
					"Ubuntu, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
				color: "brand.primary",
				lineHeight: "base",
				padding: 0,
				margin: 0,
				backgroundColor: "brand.secondary",
			},
			a: {
				color: "inherit",
				textDecoration: "none",
			},
			ul: {
				listStyle: "none",
			},
			"&::-webkit-scrollbar": {
				width: "0.6em",
			},
			"&::-webkit-scrollbar-track": {
				borderRadius: "0px",
				background: "transparent",
			},
			"&::-webkit-scrollbar-thumb": {
				background: "brand.primary",
				borderRadius: "50px",
			},
		}),
	},
});

export default theme;