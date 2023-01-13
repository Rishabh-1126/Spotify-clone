import React from "react";
import { FaPlus } from "react-icons/fa";
import { BsMusicNoteList, BsTrash } from "react-icons/bs";
import { Playlist } from "./Playlist";

function Menuplaylist() {
  return (
    <div className="playlistcontainer">
      <div className="namecontainer">
        <p>Playlist</p>
        <i>
          <FaPlus />
        </i>
      </div>
      <div className="playlistscroll">
        {Playlist &&
          Playlist.map((list) => (
            <div className="playlist" key={list.id}>
              <i className="list">
                <BsMusicNoteList />
              </i>
              <p>{list.name}</p>
              <i className="Trash">
                <BsTrash />
              </i>
            </div>
          ))}
      </div>
    </div>
  );
}

export { Menuplaylist };
