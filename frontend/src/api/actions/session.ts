import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "api/cache_keys";
import { queryLogin, queryLogout, queryRegister, refreshSession } from "api/requests/session";
import { AxiosError } from "axios";
import { useLocalStorage } from "common/hooks/storage";
import { useNotification } from "common/notifications/Notifications_comp";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type Session = {
	email: string;
	token: string;
};

//I just don't want to use RTK for this
export const useSession = () => {
	const queryClient = useQueryClient();
	const [userInfo, setUserInfo, removeUserInfo] = useLocalStorage(CACHE_KEYS.SESSION, undefined);
	const { addNotification } = useNotification();
	const navigate = useNavigate();
	

	const updataSession = (data: { varName: string; varVal: unknown }) => {
		setUserInfo((prevData: Session | undefined) => {
			if (!prevData) {
				return prevData;
			}

			return {
				...prevData,
				[data.varName]: data.varVal,
			};
		});

		queryClient.setQueryData([CACHE_KEYS.SESSION], (prevData: Session | undefined) => {
			if (!prevData) {
				return prevData;
			}

			return {
				...prevData,
				[data.varName]: data.varVal,
			};
		});
	};

	const { data, isError, error } = useQuery({
		queryKey: [CACHE_KEYS.SESSION],
		queryFn: refreshSession,
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
		placeholderData: userInfo as Session,
	});

	const {
		mutate: login,
		isPending: isLoadingLogin,
		error: errorLogin,
	} = useMutation({
		mutationFn: queryLogin,
		mutationKey: [CACHE_KEYS.SESSION],
		onSuccess: (data: Session) => {
			setUserInfo(data);
			queryClient.setQueryData([CACHE_KEYS.SESSION], data);
			navigate("/");

			addNotification({
				type: "success",
				title: "Success",
				message: "User logged in successfully",
			});
		},
		onError: (error: AxiosError<{ error: string }>) => {
			addNotification({
				type: "error",
				title: "Error",
				message: error.response?.data.error ?? "Something went wrong",
			});
		}
	});

	const { mutate: logout, isPending: isLoadingLogout } = useMutation({
		mutationFn: queryLogout,
		mutationKey: [CACHE_KEYS.SESSION],
		onSuccess: () => {
			removeUserInfo();
			//queryClient.invalidateQueries({queryKey:[CACHE_KEYS.SESSION]});
			queryClient.setQueryData([CACHE_KEYS.SESSION], null);
			queryClient.removeQueries();
		},
	});

	const {
		mutate: register,
		isPending: isRegisterPending,
		error: registerError,
	} = useMutation({
		mutationFn: queryRegister,
		mutationKey: [CACHE_KEYS.SESSION],
		onSuccess: (data) => {
			setUserInfo(data);
			queryClient.setQueryData([CACHE_KEYS.SESSION], data);
			addNotification({
				type: "success",
				title: "Success",
				message: "User registered successfully",
			});
			navigate("/");
		},
		onError: (error: AxiosError<{ error: string }>) => {
			addNotification({
				type: "error",
				title: "Error",
				message: error.response?.data.error ?? "Something went wrong",
			});
		},
	});

	useEffect(() => {
		if (!data || isError || error) {
			removeUserInfo();
			queryClient.setQueryData([CACHE_KEYS.SESSION], null);
		} else {
			setUserInfo(data);
		}
	}, [data, isError, error]);

	return {
		user: (userInfo as Session | undefined) ?? undefined,
		login,
		isLoadingLogin,
		logout,
		isLoadingLogout,
		register,
		isRegisterPending,
		errorLogin: errorLogin as AxiosError<{ error: string }>,
		registerError: registerError as AxiosError<{ error: string }>,
		updateSession: updataSession,
	};
};
