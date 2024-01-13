import React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({image , playlistName, id }) => {
  return (
    <div className="card min-w-60 max-w-72 bg-base-200 shadow-xl scroll-smooth">
      <figure className="px-10 pt-10  overflow-hidden">
        <img
          src={image}
          alt={playlistName}
          className="rounded-xl max-h-64 max-w-max-h-64 min-h-max-h-64 min-w-max-h-64 object-cover"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{playlistName}</h2>
        <div className="card-actions w-full">
            <Link className="w-full" to={`/playlist/${id}`}>
          <button className="btn btn-sm btn-primary w-full text-white font-medium mt-3">See Playlist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
