import axios from "axios";
import toast from "react-hot-toast";

const url = "https://playlist-tief.onrender.com/api"

const addSongToPlaylist = (playlistId, songId) => {
  axios
    .put(`${url}/playlists/add-song`, {
      playlistId: playlistId,
      songId: songId,
    })
    .then(() => toast.success("Add Song Successfully!"))
    .catch(() => toast.error("This song is already in the playlist."));
  console.log(`playlist id -> ${playlistId}`);
  console.log(`song id -> ${songId}`);
};

const createPlaylist = async (name, desc ) => {
    await axios.post(`${url}/playlists`, {
    name : name,
    desc : desc,
    songs : [],
  });
  location.reload();
  
};
const updatePlaylist = async (id, name , desc) => {
    await axios.put(`${url}/playlists/edit/${id}`,{
        name : name,
        desc : desc
    })
    location.reload();
}

const removePlaylist = async (id) => {
    await axios.delete(`${url}/playlists/${id}`);
    window.location.href = "http://localhost:5173/"
}

const removeSongFromPlaylist = async (
  playlistId,
  songId,
  setReload,
  reload
) => {
  try {
    await axios.put(`${url}/playlists/remove-song`, {
      playlistId: playlistId,
      songId: songId,
    });
    console.log(`playlist id -> ${playlistId}`);
    console.log(`song id -> ${songId}`);
    toast.success("remove Song Successfully!");
    console.log("removeSongFromPlaylist");
    setReload(!reload);
  } catch (err) {
    toast.error("something error");
  }
};

const getPlaylistData = async (playlistId, setPlaylistData, setSongData , setName, setDesc) => {
  const result = await axios.get(
    `${url}/playlists/${playlistId}`
  );
  setPlaylistData(result.data.data.playlist);
  setSongData(result.data.data.songs);
  setName(result.data.data.playlist.name);
  setDesc(result.data.data.playlist.desc);
  console.log("getPlaylistData");
};

const getAllPLaylist = async (setDataPlaylist) => {
    const result = await axios.get(`${url}/playlists`)
    setDataPlaylist(result.data.data);
}

const searchData = async (search ,setPlaylist , setSong) => {
    const result = await axios.post(`${url}/`,{
        search : search
    });
    setPlaylist(result.data.data.playlists)
    setSong(result.data.data.songs)
    console.log(result.data.data);

}

export {
  addSongToPlaylist,
  createPlaylist,
  removeSongFromPlaylist,
  getPlaylistData,
  getAllPLaylist,
  removePlaylist,
  updatePlaylist,
  searchData
};
