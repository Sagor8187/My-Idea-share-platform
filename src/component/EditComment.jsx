"use client";

import { useState } from "react";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export default function EditComment({ id, oldPost }) {
  const [post, setPost] = useState(oldPost || "");
 const router = useRouter();
  const handleUpdate = async () => {
    const res = await fetch(`http://localhost:5000/comment/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ post }),
    });

    const data = await res.json();
    if(data){
      toast.success("Comment Edit Successfull")
       router.refresh();
    }
  };

  return (
    <Modal>
      <Button>Edit Comment</Button>

      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">

            <Modal.CloseTrigger />

            <Modal.Body className="p-6">
              <Surface variant="default">

                <TextField className="w-full">
                  <Label>Update Comment</Label>

                  <Input
                    value={post}
                    onChange={(e) => setPost(e.target.value)}
                    placeholder="Edit your Comment"
                  />
                </TextField>

              </Surface>
            </Modal.Body>

            <Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>

              <Button onClick={handleUpdate}>
                Save
              </Button>
            </Modal.Footer>

          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}