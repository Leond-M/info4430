import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNotification } from "common/notifications/Notifications_comp";
import { FC, FormEvent, useState } from "react";



type Props = {
    returnTo?: string;
};

const PaymentElementCheckout: FC<Props> = ({ returnTo }) => {

    const [isProcessing, setIsProcessing] = useState(false);
    //notification hook
    const { addNotification } = useNotification();

    //stripe
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        const { error } = await stripe.confirmPayment({
            elements,
            redirect: "always",
            confirmParams: {
                return_url: `${window.location.origin}/payment-completion${returnTo ? `?return_to=${returnTo}` : ""}`,
            },
        });

        if (error) {
            addNotification({
                type: "error",
                title: "error",
                message: error.message || "something_went_wrong",
            });
        }

        setIsProcessing(false);
    };

    return (
        <form onSubmit={handleSubmit} className="">
            <PaymentElement />

            <button disabled={isProcessing} type="submit" className="mt-5 block w-full  cursor-pointer bg-[#6db1ff] px-6 py-4 text-center text-2xl font-bold hover:bg-blue-300">
                {isProcessing ? <span className="loading loading-dots" /> : "PAY NOW"}
            </button>
        </form>
    );
};

export default PaymentElementCheckout;
