package pg_models

type Listing struct {
	ImgId        string  `json:"img_id"`
	Title        string  `json:"title"`
	Price        float64 `json:"price"`
	Description  string  `json:"description"`
	Location     string  `json:"location"`
	IsBookmarked bool    `json:"is_bookmarked"`
	Id           string  `gorm:"type:uuid;default:gen_random_uuid();primaryKey;unique;not null"`
}
