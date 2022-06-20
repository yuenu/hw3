export const fetcher = async () => {
  const response = await fetch(
    "https://run.mocky.io/v3/d7a29aba-9aac-4a97-b1b7-7b3d87ae8b7e"
  );
  const res = await response.json();
  return res;
};
