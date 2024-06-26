import { useState, FC} from "react";
import { Link } from "react-router-dom";

import { AuthForm, LOGIN_FIELD_NAMES, loginFields } from "./Sign_in_types";
import { useSession } from "api/actions/session";
import { Box, CircularProgress } from "@mui/material";

const SignInPage: FC = () => {
    //you can take other properties from the useMutation hook https://tanstack.com/query/latest/docs/react/guides/mutations
    const { login, isLoadingLogin, errorLogin } = useSession();

    const [formData, setFormData] = useState<AuthForm>({
        [LOGIN_FIELD_NAMES.EMAIL]: "",
        [LOGIN_FIELD_NAMES.PASSWORD]: "",
    });

    // Error State for sign in inputs
    const [signInErr, setSignInErr] = useState<AuthForm>({
        [LOGIN_FIELD_NAMES.EMAIL]: "",
        [LOGIN_FIELD_NAMES.PASSWORD]: "",
    });

    const signInHasError = Object.values(signInErr).some((value) => value !== "");

    //Fucntion that resets the errors
    const resetErrors = () => {
        setSignInErr({
            [LOGIN_FIELD_NAMES.EMAIL]: "",
            [LOGIN_FIELD_NAMES.PASSWORD]: "",
        });
    };

    //Function that validates sign in form inputs
    const validateForm = () => {
        //Email validate
        if (!formData.email) {
            setSignInErr((prevState) => {
                return { ...prevState, email: "Email is requiered" };
            });

            return;
        }

        if (!formData.email.includes("@") || !formData.email.includes(".")) {
            setSignInErr((prevState) => {
                return { ...prevState, email: "Email is not valid"};
            });

            return;
        }

        //Password Validate

        if (!formData.password) {
            setSignInErr((prevState) => {
                return { ...prevState, rePassword: "Password is requiered"};
            });
            return;
        }
    };

    //submit handler
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { email, password } = formData;

        validateForm();
        login({ email, password });
    };

    //change handler
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (signInHasError) {
            resetErrors();
        }
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    //map over input fields of the registration form
	const createSignInFields = () => {
		return loginFields.map((entry) => (
			<div key={entry.name}>
				<label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
					{entry.label}
				</label>
				<div className="mt-2">
					<input
						className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
						name={entry.name}
						type={entry.type}
						autoComplete="off"
						onChange={changeHandler}
						value={formData[entry.name] as string}
						placeholder={entry.placeHolder}
					/>
					<label className={`mb-1 text-sm text-red-600 ${signInErr[entry.name] ? "" : "hidden"}`} htmlFor={entry.name}>
						{signInErr[entry.name]}
					</label>
				</div>
			</div>
		));
	};


    return (
		<main className="flex h-screen flex-row items-center justify-center bg-white">
		<div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-sm">
				<img
					className="mx-auto h-10 w-auto"
					src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
					alt="Your Company"
				/>
				<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
			</div>

			<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
				<form className="space-y-6" onSubmit={submitHandler}>
					{createSignInFields()}


					<div>
						<button
							type="submit"
							disabled={isLoadingLogin}
							className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
						>
							{isLoadingLogin ? (
								<Box sx={{ display: "flex" }}>
									<CircularProgress />
								</Box>
							) : (
								"Sign in"
							)}
						</button>
					</div>
				</form>

				<p className="mt-10 text-center text-sm text-gray-500">
					Do not have an account?{" "}
					<Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
						Sign up
					</Link>
					{/* error from the server */}
					{errorLogin?.response?.data?.error && (
						<span className="mt-2 block text-sm text-red-600">{errorLogin?.response?.data?.error}</span>
					)}
				</p>
			</div>
		</div>
	</main>
    );
};

export default SignInPage;
