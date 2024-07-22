import { useQuery } from "@tanstack/react-query";
import { CACHE_KEYS } from "api/cache_keys";
import { queryListing, queryListings } from "api/requests/listings";




export const useGetListings = (vehicleType: string) => {


	const { data, isError, error, isLoading } = useQuery({
		queryKey: [CACHE_KEYS.LISTINGS, vehicleType],
		queryFn: () => queryListings(vehicleType),
		refetchOnMount: false,
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
		refetchOnMount: false,
		refetchOnWindowFocus: false,
		refetchOnReconnect: false,
		staleTime: 1000 * 60 * 60 * 1, //1 hour
		retry: false,
		enabled: !!vehicleType && !!listingId,
	});

	return { data, isError, error, isLoading };
};

