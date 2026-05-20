"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function DeletePost({ id }) {
  const router = useRouter();
  const deletepost = async () => {
    const { data: tokendata } = await authClient.token();
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${tokendata?.token}`,
      },
    });
    const output = await res.json();

    if (output) {
      toast.success("Comment Delete Successful");
      router.refresh();
    }
  };

  return (
    <div>
      <Button variant="danger-soft" onClick={deletepost}>
        Delete
      </Button>
    </div>
  );
}
