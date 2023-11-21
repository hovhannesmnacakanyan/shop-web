import Joi from "joi";

export const validateEmail = (email: string) => {
  if (email.length > 250) return false;
  if (!email.trim()) return false;

  const validatedEmail = Joi.string()
    .email({ tlds: { allow: false } })
    .validate(email);

  return !validatedEmail.error;
};

export const validatePassword = (password: string) => {
  if (password && password.length > 20) return false;
  if (password && !password.trim()) return false;

  return password && password.match(/^(?=.*\d)\S{8,20}$/);
};
