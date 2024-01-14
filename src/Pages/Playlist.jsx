import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import {
  removeSongFromPlaylist,
  getPlaylistData,
  removePlaylist,
} from "../functions/function";
import ModalUpdatePlaylist from "../Components/ModalUpdatePlaylist";

const Playlist = () => {
  const { id } = useParams();
  const [playlistData, setPlaylistData] = useState([]);
  const [songData, setSongData] = useState([]);
  const [reload, setReload] = useState(true);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    getPlaylistData(id, setPlaylistData, setSongData , setName, setDesc );
  }, [reload]);

  return (
    <div className="flex  flex-col h-screen ">
      <ModalUpdatePlaylist setName={setName}  name={name} setDesc={setDesc} desc={desc} id={id}/>

      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start  sm:items-end w-full h-auto p-4">
        <img className="w-60 " src={playlistData.img} alt="" />
        {/* Text Box */}
        <div className="ms-5 flex flex-col gap-y-2 mt-10 sm:mt-0">
          <p className="text-base  font-medium">PLAYLIST</p>
          <h1 className="text-4xl font-bold text-white">{playlistData.name}</h1>
          <p className="text-base text-[15px]">{playlistData.desc}</p>
          <div className="flex items-center w-full gap-x-1">
            <button className="btn btn-sm btn-primary w-32  text-white">
              Play
            </button>
            <details className="dropdown  dropdown-end">
              <summary className="m-1 btn border-none bg-transparent  ">
                <CiCircleMore size={35} />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100   rounded-box w-52">
                <li>
                  <a
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    Edit Detail
                  </a>
                </li>
                <li className="hover:bg-red-500 rounded-box">
                  <a onClick={() => removePlaylist(id)}>Delete</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <div className=" h-full pb-20 overflow-auto ">
          {songData.length != 0 ? (
            <table className="table text-center ">
              {/* head */}
              <thead>
                <tr className="text-white text-lg">
                  <th>Songname</th>
                  <th>Artist</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {songData.map((song, index) => (
                  <tr key={index} className="text-white">
                    <td className="min-w-60">{song.name}</td>
                    <td className="min-w-60">{song.artist}</td>
                    <td>
                      <div className="">
                        <button
                          onClick={() =>
                            removeSongFromPlaylist(
                              id,
                              song._id,
                              setReload,
                              reload
                            )
                          }
                          className="btn btn-sm btn-error text-white min-w-48"
                        >
                          Remove Song
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="flex h-full justify-center items-center">
              <h1 className="text-2xl">This playlist has no songs....</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Playlist;
