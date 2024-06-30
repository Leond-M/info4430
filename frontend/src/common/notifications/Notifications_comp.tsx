import { NotificationContext } from "context/notification_context";
import { FC, useContext, useEffect } from "react";
import { HiCheckCircle, HiOutlineX, HiXCircle } from "react-icons/hi";

export type NotificationConfig = {
	type: "info" | "success" | "warning" | "error";
	title: string;
	message: string;
	id?: string;
};

//translation to tailwind classes
const bgTypeColor = {
	info: "bg-info",
	success: "bg-green-50",
	warning: "bg-warning",
	error: "bg-red-50",
};

const textTypeColor1 = {
	info: "text-info",
	success: "text-green-400",
	warning: "text-warning",
	error: "text-red-400",
};

const textTypeColor2 = {
	info: "text-info",
	success: "text-green-700",
	warning: "text-warning",
	error: "text-red-700",
};

const textTypeColor3 = {
	info: "text-info",
	success: "text-green-800",
	warning: "text-warning",
	error: "text-red-800",
};

{
	/* Custom hook to manage notifications */
}

//custom hook to manage notifications
export const useNotification = () => {
	const { addNotification, removeNotification } = useContext(NotificationContext);
	return { addNotification, removeNotification };
};

{
	/* Displaying the notifications */
}
export const NotificationList: FC = () => {
	const { notifications } = useContext(NotificationContext);

	return (
		<div className="fixed right-0 top-0 z-[999] flex w-full min-w-[200px] flex-col items-start justify-center gap-2 md:w-[420px]">
			{notifications.map((notification) => {
				return <MainNotification key={notification.id} {...notification} />;
			})}
		</div>
	);
};

{
	/* Main notification component, this is what gets rendered */
}
export const MainNotification: FC<NotificationConfig> = ({ type, title, message, id }) => {
	const { removeNotification } = useNotification();

	useEffect(() => {
		const timer = setTimeout(() => {
			removeNotification(id!);
		}, 5000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<main className={`w-fit rounded-md shadow-md ${bgTypeColor[type]}`}>
			<div className={`rounded-md ${bgTypeColor[type]} p-4`}>
				<div className="flex">
					<div className="shrink-0">
						{type === "success" && <HiCheckCircle className="size-5 text-green-400" aria-hidden />}
						{type === "error" && <HiXCircle className="size-5 text-red-400" aria-hidden />}
					</div>
					<div className="ml-3">
						<div className="flex justify-between">
							<h3 className={`text-sm font-medium ${textTypeColor3[type]}`}>{title}</h3>
						</div>
						<div className={`mt-2 text-sm ${textTypeColor2[type]}`}>
							<p>{message}</p>
						</div>
					</div>
					<button className="flex shrink-0" onClick={() => removeNotification(id!)}>
						<span className="sr-only">{"close"}</span>
						<HiOutlineX className={`size-5 ${textTypeColor1[type]}`} aria-hidden="true" />
					</button>
				</div>
			</div>
		</main>
	);
};
