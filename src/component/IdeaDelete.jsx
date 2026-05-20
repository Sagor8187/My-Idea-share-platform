"use client"

import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function IdeaDelete({item}) {
  const router = useRouter();
const deleteIdea = async () => {
 const {data:tokendata} = await authClient.token()
  const res = await fetch(
    `${process.env.MY_PUBLIC_NEXT_URL}/idea/${item._id}`,
    {
      method: "DELETE",
      headers:{
        authorization :`Bearer ${tokendata?.token}`
      }
    }
  );

  const data = await res.json();
if(data){
  toast.success('Idea Deleted Successfully')
       router.refresh();
}
  
};
    
  return (
    <div>
         <AlertDialog>
      <Button variant="danger">Delete Your Idea</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{item.ideaTitle}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={deleteIdea} slot="close" variant="danger">
                Delete Project
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        
    </div>
  )
}
