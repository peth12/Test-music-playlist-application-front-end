import React from "react";
import { CiCircleMore } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Playlist = () => {
    const {id} = useParams()
    const [playlistData , setPlaylistData] = useState([])
    const [songData , setSongData] = useState([])
  useEffect(()  => {
    const getPlaylistData = async () => {
        const result = await axios.get(`http://localhost:8080/api/playlists/${id}`)
        setPlaylistData(result.data.data.playlist)
        console.log(playlistData);
        setSongData(result.data.data.songs)
        console.log(songData);
    }
    getPlaylistData();
  }, []);
  return (
    <div className="flex  flex-col h-screen ">
      <div className="flex flex-col sm:flex-row justify-center items-center sm:justify-start  sm:items-end w-full h-auto p-4">
        <img
          className="w-60 "
          src={playlistData.img}
          alt=""
        />
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
              <summary className="m-1 btn border-none bg-transparent hover:bg-transparent">
                <CiCircleMore size={35} />
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <a>Edit Detail</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-5">
      <div className=" h-full pb-20 overflow-auto ">
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
                {songData.map((item , index) => (
                    <tr key={index} className="text-white">
                  <td className="min-w-60">{item.name}</td>
                  <td className="min-w-60">{item.artist}</td>
                  <td>
                    <div className="">
                      <button className="btn btn-sm btn-error text-white min-w-48">Remove Song</button>
                    </div>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          </div>
      </div>
    </div>
  );
};

export default Playlist;
