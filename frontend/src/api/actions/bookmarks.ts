import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "api/cache_keys";
import { postBookmark, queryBookmarks } from "api/requests/bookmarks";




export const usePostBookmark = () => {
	const queryClient = useQueryClient();
	const {mutate, error, isPending, isError} = useMutation( {
		mutationFn: postBookmark,
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: [CACHE_KEYS.LISTINGS]});
			queryClient.invalidateQueries({queryKey: [CACHE_KEYS.BOOKMARKS]});
		},
		onError: (error) => {
			console.error(error);
		}
	});

	return {mutate, error, isPending, isError};
};


export const useGetBookmarks = () => {
	const {data, isError, error, isLoading} = useQuery({
		queryKey: [CACHE_KEYS.BOOKMARKS],
		queryFn: () => queryBookmarks(),
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
		enabled: true,
	});

	return {data, isError, error, isLoading};
}
