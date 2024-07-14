import VehicleGalleryCard from "./Vehicle_gallery_card";


const mockData = [
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 1",
		price: "$100",
		location: "Location 1",
		isBookmarked: false,
		id: 1,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 2",
		price: "$200",
		location: "Location 2",
		isBookmarked: true,
		id: 2,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 3",
		price: "$300",
		location: "Location 3",
		isBookmarked: false,
		id: 3,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 4",
		price: "$400",
		location: "Location 4",
		isBookmarked: true,
		id: 4,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 5",
		price: "$500",
		location: "Location 5",
		isBookmarked: false,
		id: 5,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 6",
		price: "$600",
		location: "Location 6",
		isBookmarked: true,
		id: 6,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 7",
		price: "$700",
		location: "Location 7",
		isBookmarked: false,
		id: 7,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 8",
		price: "$800",
		location: "Location 8",
		isBookmarked: true,
		id: 8,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 9",
		price: "$900",
		location: "Location 9",
		isBookmarked: false,
		id: 9,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 10",
		price: "$1000",
		location: "Location 10",
		isBookmarked: true,
		id: 10,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 11",
		price: "$1100",
		location: "Location 11",
		isBookmarked: false,
		id: 11,
	},
	{
		img: "https://images.unsplash.com/photo-1612838320302-4b3b3b3b3b3b",
		title: "Vehicle 12",
		price: "$1200",
		location: "Location 12",
		isBookmarked: true,
		id: 12,
	},
];





const VehicleGallery = () => {

  return (
	<main className="mt-20 grid grid-cols-1 items-center justify-center gap-x-5 gap-y-16 px-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
		{mockData.map((vehicle) => (
			<VehicleGalleryCard key={vehicle.id} {...vehicle} />
		))}

	</main>
  );
}

export default VehicleGallery;