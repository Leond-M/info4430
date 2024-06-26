// register page types

export const enum REGISTER_FIELD_NAMES {
	EMAIL = "email",
	PASSWORD = "password",
	RE_PASSWORD = "rePassword",
	TERMS_AND_CONDITIONS = "termsAndConditions",
}

export const registerFields = [
	{
		name: REGISTER_FIELD_NAMES.EMAIL,
		label: "Email",
		placeHolder: "Type your email",
		type: "email",
	},
	{
		name: REGISTER_FIELD_NAMES.PASSWORD,
		label: "Password",
		placeHolder: "Type your strong password",
		type: "password",
	},
	{
		name: REGISTER_FIELD_NAMES.RE_PASSWORD,
		label: "Confirm Password",
		placeHolder: "Re-type your password",
		type: "password",
	},
];

export type RegisterForm = {
	[REGISTER_FIELD_NAMES.EMAIL]: string;
	[REGISTER_FIELD_NAMES.PASSWORD]: string;
	[REGISTER_FIELD_NAMES.RE_PASSWORD]: string;
	[REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS]: boolean;
};

export type RegisterFormErrors = {
	[REGISTER_FIELD_NAMES.EMAIL]: string;
	[REGISTER_FIELD_NAMES.PASSWORD]: string;
	[REGISTER_FIELD_NAMES.RE_PASSWORD]: string;
	[REGISTER_FIELD_NAMES.TERMS_AND_CONDITIONS]: string;
};
