package common

import (
	"encoding/json"

	"math/rand"
	"time"
)

func CastToStruct[T any](rawData interface{}, data *T) error {
	Js, err := json.Marshal(rawData)
	if err != nil {
		return err
	}
	err = json.Unmarshal(Js, data)
	if err != nil {
		return err
	}
	return nil
}

func RandomString(length int) string {
	// charset defines the characters that can be used in the random string
	const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

	// seed the random number generator
	var seededRand = rand.New(rand.NewSource(time.Now().UnixNano()))
	b := make([]byte, length)
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}
