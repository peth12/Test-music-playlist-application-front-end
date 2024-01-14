import React, { useEffect, useState } from "react";
import { updatePlaylist } from "../functions/function";

const ModalUpdatePlaylist = (props) => {
    const {setName, name , setDesc, desc ,id} = props
  return (
    <>
      {" "}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Update!</h3>

          <label className="form-control w-full pt-3">
            <div className="label">
              <span className="label-text">Playlist name </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </label>

          <div className="modal-action">
            <button onClick={()=> updatePlaylist(id, name, desc )}  className="btn btn-primary text-white px-5">Save</button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button  className="btn btn-error text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalUpdatePlaylist;
