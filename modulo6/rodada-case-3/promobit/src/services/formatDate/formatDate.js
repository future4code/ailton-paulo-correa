export const formatDate = (date) => {
  const options = { day: "numeric", month: "short", year: "numeric" };
  const format = new Date(date)
    .toLocaleString("pt-BR", options)
    .replaceAll("de", "")
    .replaceAll(".", "")
    .replaceAll("  ", " ")
    .toUpperCase();
  return format;
};
