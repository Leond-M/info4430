package controllers

import (
	jwt_wrapper "it3510/pkg/jwt"
	"it3510/pkg/logger"
	"sync"
	"time"

	"github.com/gin-gonic/gin"
)

type Listing struct {
	ImgId         int     `json:"img_id"`
	Title         string  `json:"title"`
	Price         float64 `json:"price"`
	Description   string  `json:"description"`
	Location      string  `json:"location"`
	IsBookmarked  bool    `json:"is_bookmarked"`
	Id            string  `json:"id"`
	VehicleType   string  `json:"vehicle_type"`
	StartDateTime string  `json:"start_date_time"`
	EndDateTime   string  `json:"end_date_time"`
}

var listingsUtv = []Listing{
	{
		ImgId:         0,
		Title:         "Test UTV1",
		Price:         10000.00,
		Description:   "This is a test UTV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "1",
		VehicleType:   "utv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	}, {
		ImgId:        1,
		Title:        "Test UTV2",
		Price:        20000.00,
		Description:  "This is a test UTV From Andrew",
		Location:     "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked: false,
		Id:           "2",
		VehicleType:  "utv",
	}, {
		ImgId:         2,
		Title:         "Test UTV3",
		Price:         30000.00,
		Description:   "This is a test UTV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "3",
		VehicleType:   "utv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsAtv = []Listing{
	{
		ImgId:         0,
		Title:         "Test ATV1",
		Price:         5000.00,
		Description:   "This is a test ATV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "4",
		VehicleType:   "atv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test ATV2",
		Price:         6000.00,
		Description:   "This is a test ATV From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "5",
		VehicleType:   "atv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test ATV3",
		Price:         7000.00,
		Description:   "This is a test ATV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "6",
		VehicleType:   "atv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsDirtBike = []Listing{
	{
		ImgId:         0,
		Title:         "Test Dirt Bike1",
		Price:         3000.00,
		Description:   "This is a test Dirt Bike From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "7",
		VehicleType:   "dirtbike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test Dirt Bike2",
		Price:         4000.00,
		Description:   "This is a test Dirt Bike From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "8",
		VehicleType:   "dirtbike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test Dirt Bike3",
		Price:         5000.00,
		Description:   "This is a test Dirt Bike From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "9",
		VehicleType:   "dirtbike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsCamper = []Listing{
	{
		ImgId:         0,
		Title:         "Test Camper1",
		Price:         15000.00,
		Description:   "This is a test Camper From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "10",
		VehicleType:   "camper",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test Camper2",
		Price:         20000.00,
		Description:   "This is a test Camper From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "11",
		VehicleType:   "camper",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test Camper3",
		Price:         25000.00,
		Description:   "This is a test Camper From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "12",
		VehicleType:   "camper",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsRv = []Listing{
	{
		ImgId:         0,
		Title:         "Test RV1",
		Price:         30000.00,
		Description:   "This is a test RV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "13",
		VehicleType:   "rv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test RV2",
		Price:         40000.00,
		Description:   "This is a test RV From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "14",
		VehicleType:   "rv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test RV3",
		Price:         50000.00,
		Description:   "This is a test RV From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "15",
		VehicleType:   "rv",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsEbike = []Listing{
	{
		ImgId:         0,
		Title:         "Test eBike1",
		Price:         1000.00,
		Description:   "This is a test eBike From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "16",
		VehicleType:   "ebike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test eBike2",
		Price:         1500.00,
		Description:   "This is a test eBike From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "17",
		VehicleType:   "ebike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test eBike3",
		Price:         2000.00,
		Description:   "This is a test eBike From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "18",
		VehicleType:   "ebike",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsJetski = []Listing{
	{
		ImgId:         0,
		Title:         "Test Jet Ski1",
		Price:         8000.00,
		Description:   "This is a test Jet Ski From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "19",
		VehicleType:   "jetski",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test Jet Ski2",
		Price:         9000.00,
		Description:   "This is a test Jet Ski From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "20",
		VehicleType:   "jetski",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test Jet Ski3",
		Price:         10000.00,
		Description:   "This is a test Jet Ski From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "21",
		VehicleType:   "jetski",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsBoat = []Listing{
	{
		ImgId:         0,
		Title:         "Test Boat1",
		Price:         20000.00,
		Description:   "This is a test Boat From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "22",
		VehicleType:   "boat",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test Boat2",
		Price:         25000.00,
		Description:   "This is a test Boat From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "23",
		VehicleType:   "boat",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test Boat3",
		Price:         30000.00,
		Description:   "This is a test Boat From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "24",
		VehicleType:   "boat",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var listingsOther = []Listing{
	{
		ImgId:         0,
		Title:         "Test Other1",
		Price:         500.00,
		Description:   "This is a test Other From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "25",
		VehicleType:   "other",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         1,
		Title:         "Test Other2",
		Price:         750.00,
		Description:   "This is a test Other From Andrew",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "26",
		VehicleType:   "other",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
	{
		ImgId:         2,
		Title:         "Test Other3",
		Price:         1000.00,
		Description:   "This is a test Other From Leo",
		Location:      "Fake Street 123, Fake City, Fake State, 12345",
		IsBookmarked:  false,
		Id:            "27",
		VehicleType:   "other",
		StartDateTime: time.Now().Format(time.RFC3339),
		EndDateTime:   time.Now().Add(time.Hour * 24 * 7).Format(time.RFC3339),
	},
}

var AllListings = map[string][]Listing{
	"utv":      listingsUtv,
	"atv":      listingsAtv,
	"dirtbike": listingsDirtBike,
	"camper":   listingsCamper,
	"rv":       listingsRv,
	"ebike":    listingsEbike,
	"jetski":   listingsJetski,
	"boat":     listingsBoat,
	"other":    listingsOther,
}

type ListingMutex struct {
	Listings map[string][]Listing
	Mu       *sync.RWMutex
}

type Bookmark struct {
	ListingId string `json:"listing_id"`
	UserEmail string `json:"user_email"`
}

var Bookmarks = map[string][]Bookmark{
	"utv":      []Bookmark{},
	"atv":      []Bookmark{},
	"dirtbike": []Bookmark{},
	"camper":   []Bookmark{},
	"rv":       []Bookmark{},
	"ebike":    []Bookmark{},
	"jetski":   []Bookmark{},
	"boat":     []Bookmark{},
	"other":    []Bookmark{},
}

var VehicleTypes = []string{"utv", "atv", "dirtbike", "camper", "rv", "ebike", "jetski", "boat", "other"}

type BookmarkMutex struct {
	Bookmarks map[string][]Bookmark
	Mu        *sync.RWMutex
}

var BookmarkMutexes BookmarkMutex = BookmarkMutex{
	Bookmarks: Bookmarks,
	Mu:        new(sync.RWMutex),
}

var ListingMutexes ListingMutex = ListingMutex{
	Listings: AllListings,
	Mu:       new(sync.RWMutex),
}

func GetListings(ginCtx *gin.Context) {
	listType := ginCtx.Query("type")

	ListingMutexes.Mu.Lock()
	BookmarkMutexes.Mu.Lock()
	defer ListingMutexes.Mu.Unlock()
	defer BookmarkMutexes.Mu.Unlock()

	if listType == "" {
		ginCtx.JSON(200, ListingMutexes.Listings["utv"])
		return
	}

	claims, ok := ginCtx.Get("session")
	if !ok {
		logger.Log("hwy3:")
		ginCtx.JSON(200, ListingMutexes.Listings[listType])
		return
	}

	// check if listing is bookmarked
	for i, listing := range ListingMutexes.Listings[listType] {

		found := false
		for _, bookmark := range BookmarkMutexes.Bookmarks[listType] {
			if bookmark.ListingId == listing.Id && bookmark.UserEmail == claims.(jwt_wrapper.UserClaims).Email {
				ListingMutexes.Listings[listType][i].IsBookmarked = true
				found = true
			}
		}

		if !found {
			ListingMutexes.Listings[listType][i].IsBookmarked = false
		}
	}

	if listings, ok := ListingMutexes.Listings[listType]; ok {
		ginCtx.JSON(200, listings)
		return
	}
}

func BookmarkListing(ginCtx *gin.Context) {

	var body struct {
		ListingId   string `json:"listing_id"`
		VehicleType string `json:"vehicle_type"`
	}

	if ginCtx.BindJSON(&body) != nil {
		ginCtx.JSON(400, gin.H{"error": "bad request"})
		return
	}

	claims, ok := ginCtx.Get("session")
	if !ok {
		ginCtx.JSON(401, gin.H{"error": "unauthorized"})
		return
	}

	BookmarkMutexes.Mu.Lock()
	defer BookmarkMutexes.Mu.Unlock()

	// add or remove bookmark
	for i, bookmark := range BookmarkMutexes.Bookmarks[body.VehicleType] {
		if bookmark.ListingId == body.ListingId && bookmark.UserEmail == claims.(jwt_wrapper.UserClaims).Email {
			BookmarkMutexes.Bookmarks[body.VehicleType] = append(BookmarkMutexes.Bookmarks[body.VehicleType][:i], BookmarkMutexes.Bookmarks[body.VehicleType][i+1:]...)
			ginCtx.JSON(200, gin.H{"message": "bookmark removed"})
			return
		}
	}

	BookmarkMutexes.Bookmarks[body.VehicleType] = append(BookmarkMutexes.Bookmarks[body.VehicleType], Bookmark{
		ListingId: body.ListingId,
		UserEmail: claims.(jwt_wrapper.UserClaims).Email,
	})
	ginCtx.JSON(200, gin.H{"message": "bookmark added"})
}

func GetBookmarks(ginCtx *gin.Context) {
	claims, ok := ginCtx.Get("session")
	if !ok {
		ginCtx.JSON(401, gin.H{"error": "unauthorized"})
		return
	}

	BookmarkMutexes.Mu.Lock()
	defer BookmarkMutexes.Mu.Unlock()

	bookmarks := []Listing{}

	for _, vehicleType := range VehicleTypes {
		for _, bookmark := range BookmarkMutexes.Bookmarks[vehicleType] {
			if bookmark.UserEmail == claims.(jwt_wrapper.UserClaims).Email {
				for _, listing := range ListingMutexes.Listings[vehicleType] {
					if listing.Id == bookmark.ListingId {
						bookmarks = append(bookmarks, listing)
					}
				}
			}
		}
	}

	ginCtx.JSON(200, bookmarks)
}

func GetListing(ginCtx *gin.Context) {
	vehicleType := ginCtx.Query("vehicle_type")
	listingId := ginCtx.Query("listing_id")

	ListingMutexes.Mu.Lock()
	BookmarkMutexes.Mu.Lock()
	defer ListingMutexes.Mu.Unlock()
	defer BookmarkMutexes.Mu.Unlock()

	if listings, ok := ListingMutexes.Listings[vehicleType]; ok {
		for _, listing := range listings {
			if listing.Id == listingId {
				claims, ok := ginCtx.Get("session")
				if !ok {
					ginCtx.JSON(200, listing)
					return
				}

				for _, bookmark := range BookmarkMutexes.Bookmarks[vehicleType] {
					if bookmark.ListingId == listingId && bookmark.UserEmail == claims.(jwt_wrapper.UserClaims).Email {
						listing.IsBookmarked = true
					}
				}

				ginCtx.JSON(200, listing)
				return
			}
		}
	}

	ginCtx.JSON(404, gin.H{"error": "listing not found"})
}
