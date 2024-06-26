import { useState, FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { REGISTER_FIELD_NAMES, RegisterForm, RegisterFormErrors, registerFields } from "./Register_types";
import { useSession } from "api/actions/session";
import { Link } from "react-router-dom";

const RegisterPage: FC = () => {
	//session management
	const { register, isRegisterPending, registerError } = useSession();

	//local state management
	const [formData, setFormData] = useState<RegisterForm>({
		[REGISTER_FIELD_NAMES.EMAIL]: "",
		[REGISTER_FIELD_NAMES.PASSWORD]: "",
		[REGISTER_FIELD_NAMES.RE_PASSWORD]: "",
		[REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS]: false,
	});

	// Error State for register inputs
	const [registerErr, setRegisterErr] = useState<RegisterFormErrors>({
		[REGISTER_FIELD_NAMES.EMAIL]: "",
		[REGISTER_FIELD_NAMES.PASSWORD]: "",
		[REGISTER_FIELD_NAMES.RE_PASSWORD]: "",
		[REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS]: "",
	});

	const registerHasError = Object.values(registerErr).some((value) => value !== "");

	//Fucntion that resets the errors
	const resetErrors = () => {
		setRegisterErr({
			[REGISTER_FIELD_NAMES.EMAIL]: "",
			[REGISTER_FIELD_NAMES.PASSWORD]: "",
			[REGISTER_FIELD_NAMES.RE_PASSWORD]: "",
			[REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS]: "",
		});
	};

	//Function that validates register form inputs
	const validateForm = (): boolean => {
		//Email validate
		if (!formData.email) {
			setRegisterErr((prevState) => {
				return { ...prevState, email: "Email is requiered" };
			});

			return false;
		}

		if (!formData.email.includes("@") || !formData.email.includes(".")) {
			setRegisterErr((prevState) => {
				return { ...prevState, email: "Email is not valid" };
			});

			return false;
		}

		//Password Validate

		if (!formData.password || !formData.rePassword) {
			setRegisterErr((prevState) => {
				return { ...prevState, rePassword: "Password is requiered" };
			});
			return false;
		}
		if (formData.password.length < 8) {
			setRegisterErr((prevState) => {
				return { ...prevState, rePassword: "Password must be at least 8 characters long" };
			});
			return false;
		}
		// uses the regular expression /[A-Z]/ to check if the password contains at least one capitalized character.
		if (!/[A-Z]/.test(formData.password)) {
			setRegisterErr((prevState) => {
				return { ...prevState, rePassword: "Password must contain at least one capitalized character" };
			});

			return false;
		}

		// uses the regular expression /[\W_]/ to check if password contains at least one special character. \W matches any non-word character, and the underscore _ is included as a special character.
		if (!/[\W_]/.test(formData.password)) {
			setRegisterErr((prevState) => {
				return { ...prevState, rePassword: "Password must contain at least one special character" };
			});

			return false;
		}

		if (formData.password !== formData.rePassword) {
			setRegisterErr((prevState) => {
				return { ...prevState, rePassword: "Passwords do not match" };
			});
			return false;
		}

		if (formData.termsAndConditions === false) {
			setRegisterErr((prevState) => {
				return { ...prevState, termsAndConditions: "You must agree to the terms and conditions" };
			});
			return false;
		}

		return true;
	};

	//Register submit handler
	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { email, password } = formData;

		try {
			//Checks for user
			if (validateForm()) {
				register({
					email,
					password,
				});
			} else if (registerErr) {
				console.log(registerErr);
			}
		} catch (err) {
			console.log(err);
		}
	};

	//change handler
	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (registerHasError) {
			resetErrors();
		}

		if (e.target.type === "checkbox") {
			setFormData((prevState) => {
				return { ...prevState, [e.target.name]: e.target.checked };
			});
		} else {
			setFormData((prevState) => {
				return { ...prevState, [e.target.name]: e.target.value };
			});
		}
	};

	//map over input fields of the registration form
	const createRegisterFields = () => {
		return registerFields.map((entry) => (
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
					<label className={`mb-1 text-sm text-red-600 ${registerErr[entry.name] ? "" : "hidden"}`} htmlFor={entry.name}>
						{registerErr[entry.name]}
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
						{createRegisterFields()}

						<div className="text-sm font-medium ">
							<input
								name={REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS}
								type="checkbox"
								checked={formData.termsAndConditions}
								onChange={changeHandler}
								className="outline-none"
							/>
							<label className="ml-4">
								{"I agree to the "}{" "}
								<a
									href="https://www.google.com/"
									target="_blank"
									rel="noopener noreferrer"
									className="italic text-gray-500 underline hover:text-gray-700"
								>
									{"terms and conditions"}
								</a>
							</label>
						</div>
						<label
							className={`mb-1 text-sm text-red-400  ${registerErr.termsAndConditions ? "" : "hidden"}`}
							htmlFor={REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS}
						>
							{registerErr.termsAndConditions}
						</label>

						<div>
							<button
								type="submit"
								disabled={isRegisterPending}
								className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							>
								{isRegisterPending ? (
									<Box sx={{ display: "flex" }}>
										<CircularProgress />
									</Box>
								) : (
									"Sign up"
								)}
							</button>
						</div>
					</form>

					<p className="mt-10 text-center text-sm text-gray-500">
						Already a member?{" "}
						<Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
							Sign in
						</Link>
						{/* error from the server */}
						{registerError?.response?.data?.error && (
							<span className="mt-2 block text-sm text-red-600">{registerError?.response?.data?.error}</span>
						)}
					</p>
				</div>
			</div>
		</main>
	);
};

export default RegisterPage;
