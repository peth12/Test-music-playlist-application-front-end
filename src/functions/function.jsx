import axios from "axios";
import toast from "react-hot-toast";

const addSongToPlaylist = (playlistId, songId) => {
  axios
    .put(`http://localhost:8080/api/playlists/add-song`, {
      playlistId: playlistId,
      songId: songId,
    })
    .then(() => toast.success("Add Song Successfully!"))
    .catch(() => toast.error("This song is already in the playlist."));
  console.log(`playlist id -> ${playlistId}`);
  console.log(`song id -> ${songId}`);
};

const createPlaylist = () => {
  axios.post("http://localhost:8080/api/playlists", {});
};

const removeSongFromPlaylist = async (
  playlistId,
  songId,
  setReload,
  reload
) => {
  try {
    await axios.put(`http://localhost:8080/api/playlists/remove-song`, {
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

const getPlaylistData = async (playlistId, setPlaylistData , setSongData) => {
    const result = await axios.get(`http://localhost:8080/api/playlists/${playlistId}`);
    setPlaylistData(result.data.data.playlist);
    setSongData(result.data.data.songs);
    console.log("getPlaylistData");
  };

export { addSongToPlaylist, createPlaylist , removeSongFromPlaylist , getPlaylistData};
