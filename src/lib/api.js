export const getAllData = async () => {
  const res = await fetch("https://b13-a08.vercel.app/data.json");
  const data = await res.json();
  return data;
};
