const getTodaysDate = () => {
  const today = new Date();
  const dd = `${today.getDate()}`.padStart(2, "0");
  const mm = `${today.getMonth() + 1}`.padStart(2, "0");
  const yyyy = today.getFullYear();
  return `${yyyy}-${mm}-${dd}`;
};

export { getTodaysDate };
