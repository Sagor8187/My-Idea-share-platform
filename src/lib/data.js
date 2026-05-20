export const showidea = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea`);
  const data = await res.json();
  return data;
};
