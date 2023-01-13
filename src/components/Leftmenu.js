import React from "react";
import "../styles/leftmenu.css";
import { FaSpotify, FaEllipsisH } from "react-icons/fa";
import { BiSearchAlt } from "react-icons/bi";
import Menu from "./Menu";
import { Menulist } from "./Menulist";
import { Menuplaylist } from "./Menuplaylist";
import { Tracklist } from "./Tracklist";
function Leftmenu() {
  return (
    <div className="leftmenu">
      <div className="logocontainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchbox">
        <input type="text" placeholder="Search..." />

        <i className="searchicon">
          <BiSearchAlt />
        </i>
      </div>
      <Menu title={"Menu"} menuobject={Menulist} />
      <Menuplaylist />
      <Tracklist />
    </div>
  );
}
export default Leftmenu;
