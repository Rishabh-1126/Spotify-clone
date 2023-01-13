import React from "react";
import { BsFillVolumeUpFill, BsMusicNoteList } from "react-icons/bs";
import { FaDesktop } from "react-icons/fa";
import track from "../img/track.png";
function Tracklist() {
  return (
    <div className="tracklist">
      <div className="top">
        <img src={track} alt="" />
        <p className="trackname">
          Sample name <span className="trackspan">artist</span>
        </p>
      </div>
      <div className="bottom">
        <i>
          <BsFillVolumeUpFill />
        </i>
        <input type="range" />
        <i>
          <BsMusicNoteList />
        </i>
        <i>
          <FaDesktop />
        </i>
      </div>
    </div>
  );
}

export { Tracklist };
