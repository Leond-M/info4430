import { createContext, useState } from "react";
import { randomString } from "../utils/random_string";

export interface NotificationConfig {
	type: "info" | "success" | "warning" | "error";
	title: string;
	message: string;
	id?: string;
}

export const NotificationContext = createContext<{
	notifications: NotificationConfig[];
	addNotification: (e: NotificationConfig) => void;
	removeNotification: (e: string) => void;
}>({ notifications: [], addNotification: () => {}, removeNotification: () => {} });

// A "provider" is used to encapsulate only the
// components that needs the state in this context
//@ts-ignore
export const NotificationProvider = ({ children }) => {
	const [notifications, setNotifications] = useState<NotificationConfig[]>([]);

	//add notification
	const addNotification = (notification: NotificationConfig) => {
		notification.id = randomString(12);
		setNotifications((prevState) => [...prevState, notification]);
	};

	//remove notification
	const removeNotification = (id: string) => {
		setNotifications((prevState) => prevState.filter((notification) => notification.id !== id));
	};

	return (
		<NotificationContext.Provider value={{ notifications, addNotification, removeNotification }}>
			{children}
		</NotificationContext.Provider>
	);
};
