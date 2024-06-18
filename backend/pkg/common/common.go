package common

import "encoding/json"

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
