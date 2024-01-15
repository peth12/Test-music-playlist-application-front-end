import React, { useState } from "react";
import { createPlaylist } from "../functions/function";

const ModalCreate = () => {
  const [playlistName, setPlaylistName] = useState("");
  const [desc, setDesc] = useState("");


  return (
    <>
      {" "}
      <button
        className="btn  btn-primary btn-sm  text-white px-5"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Create Playlist
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create!</h3>
          
          <label className="form-control w-full pt-3">
            <div className="label">
              <span className="label-text">Playlist name</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) => setPlaylistName(e.target.value)}
            />
          </label>
          <label className="form-control w-full  pt-3">
            <div className="label">
              <span className="label-text">Playlist description</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-primary text-white"
                onClick={() => createPlaylist(playlistName, desc)}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalCreate;
