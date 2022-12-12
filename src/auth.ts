import { supabase } from "./supabaseClient";

	let loading = false;
	let email, password, confirmpassword;
	let message = { success: null, display: "" };

	const handleSignup = async () => {

		if (password != confirmpassword) {
			message = { success: false, display: "Password and Confirm Password fields do not match" };
			return;
		}

		try {
			loading = true;
			const { error } = await supabase.auth.signUp({ email, password });
			console.log(error);
			if (error) throw error;
			message = { success: true, display: "We have sent you an confirmation email. Please check your email" };
		} catch (error) {
			console.log(error);
			let errorMsg = error.error_description || error.message;
			message = { success: false, display: errorMsg };
		} finally {
			loading = false;
		}
	};