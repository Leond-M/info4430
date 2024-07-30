package local_stripe

import (
	"it3510/pkg/logger"

	"github.com/stripe/stripe-go/v79"
	"github.com/stripe/stripe-go/v79/client"
	//"github.com/stripe/stripe-go/v79/paymentintent"
)

type StripeCl struct {
	secretKey string
	SC        *client.API
}

var StripeClient StripeCl

func (sc *StripeCl) Intialize(secretKey string) {
	sc.secretKey = secretKey
	sc.SC = &client.API{}
	sc.SC.Init(secretKey, nil)
	logger.Log("Stripe client initialized")
}

func HandlePaymentIntent(price float64) (string, error) {
	params := &stripe.PaymentIntentParams{
		Amount:   stripe.Int64(int64(price * 100)),
		Currency: stripe.String(string(stripe.CurrencyUSD)),
		AutomaticPaymentMethods: &stripe.PaymentIntentAutomaticPaymentMethodsParams{
			Enabled: stripe.Bool(true),
		},
		Customer: stripe.String("cus_PqiHzUW835mM2j"),
	}

	pi, err := StripeClient.SC.PaymentIntents.New(params)
	if err != nil {
		if stripeErr, ok := err.(*stripe.Error); ok {
			logger.Log("Stripe error code: %s", stripeErr.Error())
			return "", stripeErr.Err
		} else {
			logger.Log("Stripe error: %s", err.Error())
			return "", err
		}
	}

	return pi.ClientSecret, nil
}
