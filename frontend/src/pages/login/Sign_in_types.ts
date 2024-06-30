// Types for the login form

export const enum LOGIN_FIELD_NAMES {
	EMAIL = "email",
	PASSWORD = "password",
}

export const loginFields = [
	{
		name: LOGIN_FIELD_NAMES.EMAIL,
		label: "Email",
		placeHolder: "Type your email here",
		type: "email",
	},
	{
		name: LOGIN_FIELD_NAMES.PASSWORD,
		label: "Password",
		placeHolder: "Type your password here",
		type: "password",
	},
];

export type AuthForm = {
	[LOGIN_FIELD_NAMES.EMAIL]: string;
	[LOGIN_FIELD_NAMES.PASSWORD]: string;
};
