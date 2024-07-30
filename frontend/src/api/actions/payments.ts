import { useMutation } from "@tanstack/react-query";
import { postPaymentIntent } from "api/requests/payments";
import { AxiosError } from "axios";



export const usePostPaymentIntent = () => {
	const {mutate, error, isPending, isError, data} = useMutation( {
		mutationFn: postPaymentIntent,
		onSuccess: () => {
			console.log("Payment intent created");
		},
		onError: (error: AxiosError<{error: string}>) => {
			console.log(error.response?.data.error);
		}
	});

	return {mutate, error, isPending, isError, data};
};