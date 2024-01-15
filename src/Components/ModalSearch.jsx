import React, { useState } from "react";
import { addSongToPlaylist, searchData } from "../functions/function";
import PlaylistCard from "./PlaylistCard";

const ModalSearch = () => {
  const [playlist, setPlaylist] = useState([]);
  const [song, setSong] = useState([]);
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState("");

  return (
    <>
      {" "}
      <button
        className="btn  btn-primary btn-sm  text-white px-10"
        onClick={() => document.getElementById("my_modal_6").showModal()}
      >
        Search
      </button>
      <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Search</h3>

          <label className="form-control w-full pt-3">
            <div className="label">
              <span className="label-text"></span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>

          {search != "" && playlist.length != 0 ? (
            <div>
              <p className="text-white text-2xl mt-4 font-bold">PLaylist</p>
              <div
                id="scrollbar1"
                className="flex overflow-x-scroll scrollbar1 gap-x-4 "
              >
                {playlist.map((item, index) => (
                  <>
                    <PlaylistCard
                      key={index}
                      playlistName={item.name}
                      image={item.img}
                      id={item._id}
                    />
                  </>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-center mt-10">playlist Not found</p>
          )}

          <div className="">
            {search != "" && song.length != 0 ? (
              <>
                <p className="text-white text-2xl mt-4 font-bold">Song</p>
                <table className="table text-center ">
                  {/* head */}
                  <thead>
                    <tr className="text-white text-lg">
                      <th>Songname</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {song.map((song, index) => (
                      <tr key={index} className="text-white">
                        <td className="min-w-60">{song.name}</td>
                        <td className="min-w-60">{song.artist}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </>
            ) : (
              <p className="text-center mt-10">Song Not found</p>
            )}
          </div>
          <div className="modal-action">
            <button
              onClick={() => searchData(search, setPlaylist, setSong)}
              className="btn btn-primary text-white"
            >
              Search
            </button>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default ModalSearch;
