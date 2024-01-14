import PlaylistCard from "../Components/PlaylistCard";
import ModalCreate from "../Components/ModalCreate";
import axios from "axios";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { addSongToPlaylist } from "../functions/function";
import { Link } from "react-router-dom";
import { getAllPLaylist } from "../functions/function";

const Main = () => {
  const [dataPlaylist, setDataPlaylist] = useState([]);
  const [dataSong, setDataSong] = useState([]);

  useEffect(() => {
    getAllPLaylist(setDataPlaylist)
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/songs")
      .then((result) => {
        setDataSong(result.data.data);
      })

      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col h-auto p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">Playlist</h1>
          {/* <Link to={"/create"}>
            <button className="btn  btn-primary btn-sm  text-white px-10">
              Create Playlist
            </button>
          </Link> */}
          {/* Open the modal using document.getElementById('ID').showModal() method */}
          <ModalCreate />
        </div>
        <div
          id="scrollbar1"
          className="flex overflow-x-scroll scrollbar1 gap-x-4"
        >
          {dataPlaylist.map((item, index) => (
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
      <div className=" w-full h-full ">
        <div className="bg-base-100 mt-2 md:mx-10 rounded-md overflow-auto ">
          <div className=" h-full pb-20">
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
                {/* row 1 */}
                {dataSong.map((song, index) => (
                  <tr key={index} className="text-white">
                    <td className="min-w-60">{song.name}</td>
                    <td className="min-w-60">{song.artist}</td>
                    <td>
                      <div className="">
                        <details className="dropdown  dropdown-end">
                          <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                            Add to playlist
                          </summary>
                          <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-primary rounded-box w-52">
                            {dataPlaylist.map((playlist, index) => (
                              <li key={index}>
                                <a
                                  onClick={() =>
                                    addSongToPlaylist(playlist._id, song._id)
                                  }
                                >
                                  {playlist.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </details>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
