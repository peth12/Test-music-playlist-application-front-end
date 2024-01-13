import PlaylistCard from "../Components/PlaylistCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [dataPlaylist, setDataPlaylist] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/playlists")
      .then((result) => {
        console.log(result.data);
        setDataPlaylist(result.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col h-auto p-4">
        <div className="flex justify-between items-center">
          {/* <button className="btn btn-sm btn-primary text-white font-semibold text-lg hover:btn-outline">Create Playlist</button> */}
          {/* <button className="btn btn-outline btn-primary text-white font-semibold text-lg">Create Playlist</button> */}
          <h1 className="text-white text-2xl font-semibold">
            Playlist
          </h1>
          <button className="btn  btn-primary btn-sm  text-white px-10">
            Create Playlist
          </button>
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
                <tr className="text-white">
                  <td className="min-w-60">Yoyo</td>
                  <td className="min-w-60">Cy Ganderton</td>
                  <td>
                    <div className="">
                      <details className="dropdown  dropdown-end">
                        <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                          Add to playlist
                        </summary>
                        <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-primary rounded-box w-52">
                          <li>
                            <a>playlist 1</a>
                          </li>
                          <li>
                            <a>playlist 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
                <tr className="text-white">
                  <td className="min-w-60">Yoyo</td>
                  <td className="min-w-60">Cy Ganderton</td>
                  <td>
                    <div className="">
                      <details className="dropdown  dropdown-end">
                        <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                          Add to playlist
                        </summary>
                        <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-primary rounded-box w-52">
                          <li>
                            <a>playlist 1</a>
                          </li>
                          <li>
                            <a>playlist 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
                <tr className="text-white">
                  <td className="min-w-60">Yoyo</td>
                  <td className="min-w-60">Cy Ganderton</td>
                  <td>
                    <div className="">
                      <details className="dropdown  dropdown-end">
                        <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                          Add to playlist
                        </summary>
                        <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-primary rounded-box w-52">
                          <li>
                            <a>playlist 1</a>
                          </li>
                          <li>
                            <a>playlist 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
                <tr className="text-white">
                  <td className="min-w-60">Yoyo</td>
                  <td className="min-w-60">Cy Ganderton</td>
                  <td>
                    <div className="">
                      <details className="dropdown  dropdown-end">
                        <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                          Add to playlist
                        </summary>
                        <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-primary rounded-box w-52">
                          <li>
                            <a>playlist 1</a>
                          </li>
                          <li>
                            <a>playlist 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
                <tr className="text-white">
                  <td className="min-w-60">Yoyo</td>
                  <td className="min-w-60">Cy Ganderton</td>
                  <td>
                    <div className="">
                      <details className="dropdown  dropdown-end">
                        <summary className="m-1 btn btn-sm min-w-48 text-white border-none bg-primary hover:bg-primary">
                          Add to playlist
                        </summary>
                        <ul className="p-2 shadow text-white menu dropdown-content z-[1] bg-secondary rounded-box w-52">
                          <li>
                            <a>playlist 1</a>
                          </li>
                          <li>
                            <a>playlist 2</a>
                          </li>
                        </ul>
                      </details>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
