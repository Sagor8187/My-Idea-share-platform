"use client";

import { authClient } from "@/lib/auth-client";
import { toast } from "react-hot-toast";

export default function Modalform() {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;

    if (!name.trim() || !url.trim()) {
      toast.error("Please fill the form");
    } else {
      await authClient.updateUser({
        image: url,
        name: name,
      });

      toast.success("Update Successful");
      document.getElementById("my_modal_5").close();
    }
  };

  return (
    <div>

      {/* OPEN BUTTON */}
      <button
        className="btn btn-primary"
        onClick={() =>
          document.getElementById("my_modal_5").showModal()
        }
      >
        Update Info
      </button>

      {/* MODAL */}
      <dialog
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box bg-base-100 text-base-content border border-base-300">

          <h3 className="font-bold text-lg mb-4 text-center">
            Update Information
          </h3>

          <form onSubmit={onSubmit} className="space-y-4">

            {/* NAME */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full bg-base-200 text-base-content"
              />
            </div>

            {/* IMAGE URL */}
            <div>
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="Enter image URL"
                className="input input-bordered w-full bg-base-200 text-base-content"
              />
            </div>

            {/* BUTTONS */}
            <div className="flex gap-3 pt-2">

              <button
                type="submit"
                className="btn btn-primary flex-1"
              >
                Update
              </button>

              <button
                type="button"
                className="btn btn-outline flex-1"
                onClick={() =>
                  document.getElementById("my_modal_5").close()
                }
              >
                Close
              </button>

            </div>

          </form>

        </div>
      </dialog>
    </div>
  );
}