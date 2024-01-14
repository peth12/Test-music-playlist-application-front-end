import React from "react";

const ModalCreate = () => {
  return (
    <>
      {" "}
      <button
        className="btn  btn-primary btn-sm  text-white px-10"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Create Playlist
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-primary">Close</button>
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalCreate;