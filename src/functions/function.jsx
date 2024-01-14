import axios from "axios";
import  toast  from "react-hot-toast";

const addSongToPlaylist = (playlistId, songId) => {
    axios
      .put(`http://localhost:8080/api/playlists/add-song`, {
        playlistId: playlistId,
        songId: songId,
      })
      .then(() => toast.success("Add Song Successfully!")).catch(()=> toast.error("This song is already in the playlist."))
    console.log(`playlist id -> ${playlistId}`);
    console.log(`song id -> ${songId}`);
    return;
  };

  
  const createPlaylist = () => {
      axios.post("http://localhost:8080/api/playlists", {});
    };
    

    export {addSongToPlaylist , createPlaylist}