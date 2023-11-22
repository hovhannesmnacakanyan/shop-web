export const dateConvert = (isoString: string) => {
  const offset = new Date().getTimezoneOffset();
  const localTime = new Date(isoString).getTime() - offset * 60000;
  const date = new Date(localTime);

  // Get the date parts
  const day = date.getDate();
  const month = date.getMonth() + 1; // Months are 0-based
  const year = date.getFullYear();

  // Get the time parts
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const readableDate = `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }.${year}, ${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}`;

  return readableDate;
};
