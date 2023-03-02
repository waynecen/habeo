export default function loginValidate(values) {
	const errors = {}

	// Email Validation
	if (!values.email) {
		errors.email = "Email required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Invalid email address"
	}

	// Password Validation
	if (!values.password) {
		errors.password = "Password required"
	} else if (values.password.includes(" ")) {
		errors.password = "Invalid password"
	}

	return errors
}

export function registerValidate(values) {
	const errors = {}

	// Username Validation
	if (!values.username) {
		errors.username = "Username required"
	} else if (values.username.includes(" ")) {
		errors.username = "Username cannot contain spaces"
	} else if (values.username.length < 4) {
		errors.username = "Username is too short"
	}

	// Email Validation
	if (!values.email) {
		errors.email = "Email required"
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = "Invalid email address"
	}

	// Password Validation
	if (!values.password) {
		errors.password = "Password required"
	} else if (values.password.length < 8) {
		errors.password = "Password is too short"
	} else if (values.password.length > 20) {
		errors.password = "Password is too long"
	} else if (values.password.includes(" ")) {
		errors.password = "Invalid password"
	}

	return errors
}
