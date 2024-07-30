package initializers


import (
	local_stripe "it3510/pkg/stripe"
)


func LoadStripe(secretKey string) {
	local_stripe.StripeClient.Intialize(secretKey)
}