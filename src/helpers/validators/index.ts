export const validatePassword = (password: string) => {
  if (password && password.length > 20) return false;
  if (password && !password.trim()) return false;

  return password && password.match(/^(?=.*\d)\S{8,20}$/);
};
