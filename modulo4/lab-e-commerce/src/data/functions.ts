import { regexEmail, regexUrl } from "./constants";

export const checkEmail = (email: string): boolean => regexEmail.test(email);
export const checkImageUrl = (url: string): boolean => regexUrl.test(url);
