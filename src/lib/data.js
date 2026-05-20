export const showidea = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/idea`,{
    cache: "no-store",
    next: { revalidate: 0 }
  });
  const data = await res.json();
  return data;
};
