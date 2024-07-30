import { useQueryClient } from "@tanstack/react-query";
import { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CACHE_KEYS } from "../../api/cache_keys";

const PaymentCompletion: FC = () => {
    const navigate = useNavigate();
   // const [searchParams] = useSearchParams();
   // const returnTo = searchParams.get("return_to") || "dashboard";

    const queryClient = useQueryClient();

    //redirect to dashboard
    useEffect(() => {
        setTimeout(() => {
            queryClient.invalidateQueries({ queryKey: [CACHE_KEYS.LISTINGS] });
			queryClient.invalidateQueries({ queryKey: [CACHE_KEYS.BOOKMARKS] });
			queryClient.invalidateQueries({ queryKey: [CACHE_KEYS.BORROWED] });
            navigate(`/`);
        }, 5000);
    }, []);

    return (
        <main className="h-screen w-screen">
            <section className="mx-5 px-4 pt-8 sm:px-6 lg:px-8">
                <div className="mt-8 rounded-lg border-2 border-neutral/10 bg-neutral/5 shadow-sm">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32">
                            <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-success sm:text-4xl">
                                Thank you for your payment
                            </h2>
                            <div className="flex-col items-center justify-center">
                                <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8">
                                    You will be redirected to your dashboard
                                </p>
                            </div>
                            <div className="mt-8 flex justify-center">
                                <span className="loading loading-bars text-primary"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default PaymentCompletion;
