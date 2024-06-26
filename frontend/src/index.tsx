import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import App from "app/App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NotificationProvider } from "./context/notification_context";

//react query client
const queryClient = new QueryClient();

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

//renders the entire application
root.render(
	<React.StrictMode>
		<Router>
			<QueryClientProvider client={queryClient}>
				<NotificationProvider>
					<App />
				</NotificationProvider>
			</QueryClientProvider>
		</Router>
	</React.StrictMode>,
);
