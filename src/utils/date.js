export const getMMMYYYYFromDateString = (dateString) => {
  const dateObject = new Date(dateString);

  const month = dateObject.toLocaleString("default", { month: "short" });
  const year = dateObject.getFullYear();
  return month + " " + year;
};
