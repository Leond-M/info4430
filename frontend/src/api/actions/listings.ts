import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CACHE_KEYS } from "api/cache_keys";
import { putListing, queryBorrowed, queryListing, queryListings, queryMyListings } from "api/requests/listings";
import { useNotification } from "common/notifications/Notifications_comp";





export const useGetListings = (vehicleType: string) => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: [CACHE_KEYS.LISTINGS, vehicleType],
		queryFn: () => queryListings(vehicleType),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
		enabled: !!vehicleType,
	});

	return { data, isError, error, isLoading };
};

export const useGetListing = (query :{vehicleType: string, listingId: string}) => {
	const { vehicleType, listingId } = query;
	const { data, isError, error, isLoading } = useQuery({
		queryKey: [CACHE_KEYS.LISTINGS, vehicleType, listingId],
		queryFn: () => queryListing({ vehicleType, listingId }),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
		enabled: !!vehicleType && !!listingId,
	});

	return { data, isError, error, isLoading };
};

export const useGetMyListings = () => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: [CACHE_KEYS.LISTINGS, "me"],
		queryFn: () => queryMyListings(),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
	});

	return { data, isError, error, isLoading };
}


export const usePutListing = () => {
	const {addNotification} = useNotification();
	const queryClient = useQueryClient();

	const { mutate, isPending } = useMutation({
		mutationFn: putListing,
		onError: (error) => {
			console.log("error", error);
			addNotification({
				type: "error", 
				message: "Failed to update listing" ,
				title: "Error",
			});
			
		},
		onSuccess: () => {
			queryClient.invalidateQueries({queryKey: [CACHE_KEYS.LISTINGS, "me"]});
			queryClient.invalidateQueries({queryKey: [CACHE_KEYS.LISTINGS]});
			queryClient.invalidateQueries({queryKey: [CACHE_KEYS.BOOKMARKS]});
			addNotification({
				type: "success", 
				message: "Listing updated successfully" ,
				title: "Success",
			},);
		},
	});

	return { mutate, isPending };
}

export const useGetBorrowed = () => {
	const { data, isError, error, isLoading } = useQuery({
		queryKey: [CACHE_KEYS.BORROWED],
		queryFn: () => queryBorrowed(),
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
	});

	return { data, isError, error, isLoading };
};