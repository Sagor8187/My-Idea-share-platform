"use client"

import {AlertDialog, Button} from "@heroui/react";
export default function IdeaDelete({item}) {
 
const deleteIdea = async () => {

  const res = await fetch(
    `http://localhost:5000/idea/${item._id}`,
    {
      method: "DELETE",
    }
  );

  const data = await res.json();

  console.log(data);
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
