export const setStorageItem = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorageItem = (key: string): string => {
  const name = localStorage.getItem(key);

  if (name) {
    return JSON.parse(name);
  }

  return "";
};

export const removeStorageItem = (key: string) => {
  localStorage.removeItem(key);
};
