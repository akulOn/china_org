import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider, createRouter } from "@tanstack/react-router";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import CssBaseline from "@mui/material/CssBaseline";

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

import { ThemeProvider, createTheme, ThemeOptions } from "@mui/material/styles";

export const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#6c6d74",
      light: "#898A8F",
      dark: "#4B4C51",
    },
    secondary: {
      main: "#e5a657",
      light: "#EAB778",
      dark: "#A0743C",
    },
    background: {
      default: "#262e36",
      paper: "#262e36",
    },
    text: {
      primary: "#d3d1ce",
      secondary: "#b3b7ba",
    },
  },
};

const theme = createTheme(themeOptions);

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <RouterProvider basepath={import.meta.env.BASE_URL} router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
