export type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    message: string;
};

export type ErrorState = {
    [K in keyof FormState]: string;
};
