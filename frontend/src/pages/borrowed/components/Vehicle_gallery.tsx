import { FC } from "react";
import VehicleGalleryCard from "./Vehicle_gallery_card";
import { Listing } from "api/requests/listings";


type Props = {
	data: Listing[];
};

const VehicleGallery: FC<Props> = ({data}) => {

  return (
	<main className="mt-20 grid grid-cols-1 items-center justify-center gap-x-5 gap-y-16 px-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{data.map((vehicle) => (
			<VehicleGalleryCard key={vehicle.id} data={vehicle} />
		))}

	</main>
  );
}

export default VehicleGallery;