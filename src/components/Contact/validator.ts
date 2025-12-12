export const validators = {
    firstName(value: string) {
        if (!value.trim()) return "First name is required";
        if (value.length < 2) return "Must be at least 2 characters";
        return "";
    },

    lastName(value: string) {
        if (!value.trim())
            return ""
        //return "Last name is required";
        return "";
    },

    email(value: string) {
        if (!value.trim()) return "Email is required";
        const emailRegex = /\S+@\S+\.\S+/;
        if (!emailRegex.test(value)) return "Invalid email format";
        return "";
    },

    phoneNumber(value: string) {
        if (!value.trim()) return "Phone number is required";
        if (!/^[0-9]{8,13}$/.test(value)) return "Phone must be 8–13 digits";
        return "";
    },

    message(value: string) {
        if (!value.trim()) return "Message cannot be empty";
        if (value.length < 10) return "Message must be at least 10 characters";
        return "";
    }
};