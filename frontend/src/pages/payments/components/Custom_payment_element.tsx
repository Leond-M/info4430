/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import PaymentElementCheckout from "./Payment_element";
import { usePostPaymentIntent } from "api/actions/payments";
import { DivBlurSpinner } from "common/spiners/Div_blur_spinner";

type Props = {
    returnTo?: string;
    price: string;
	id: string;
	vehicleType: string;
	startDate: string;
	endDate: string;
};

const CustomPaymentElement: FC<Props> = ({ returnTo, price, id, vehicleType, startDate, endDate }) => {
    const [stripePromise, setStripePromise] = useState<any>(null);

	const {mutate, data} = usePostPaymentIntent();



    useEffect(() => {
        mutate({
			id: id,
			price: price,
			vehicle_type: vehicleType,
			start_date: startDate,
			end_date: endDate,
		});
        setStripePromise(loadStripe(import.meta.env.VITE_REACT_APP_STRIPE_TEST_PUBLISHABLE_KEY!));
    }, []);

    return (
        <div className="min-h-[300px]">
            {stripePromise && data?.client_secret ? (
                <Elements
                    stripe={stripePromise}
                    options={{
                        clientSecret: data.client_secret,
                        appearance: {
                            theme: "stripe",
                            variables: {
                                colorPrimary: "#FAA31B",
                                colorBackground: "#ffffff",
                                colorText: "#0D0D0D",
                                colorWarning: "#fbbf24",
                                colorDanger: "#EB0010",
                                colorSuccess: "#218740",
                                fontFamily: "ui-sans-serif, system-ui, sans-serif",
                                spacingUnit: "4px",
                                borderRadius: "8px",
                                iconColor: "#000",
                                iconCardErrorColor: "#EB0010",
                                iconCardCvcColor: "#000",
                                iconCardCvcErrorColor: "#EB0010",
                                iconCheckmarkColor: "#218740",
                                iconChevronDownColor: "#0D0D0D",
                                iconChevronDownHoverColor: "#FAA31B",
                                iconCloseColor: "#0D0D0D",
                                iconCloseHoverColor: "#EB0010",
                                iconLoadingIndicatorColor: "#FAA31B",
                            },
                        },
                    }}
                >
                    <PaymentElementCheckout returnTo={returnTo} />
                </Elements>
            ) : (
                <DivBlurSpinner isLoading={true} bgColor={"bg-white/90"} />
            )}
        </div>
    );
};

export default CustomPaymentElement;
