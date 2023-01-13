import React, { useEffect } from "react";
import { FaUsers } from "react-icons/fa";

import "../styles/mainmenu.css";
import { Audiolist } from "./Audiolist";
import { Banner } from "./Banner";
function Mainmenu() {
  useEffect(() => {
    const allLi = document.querySelector(".menulist").querySelectorAll("li");

    function changeActive() {
      allLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    allLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  return (
    <div className="MainmenuContainer">
      <Banner />
      <div className="menulist">
        <ul>
          <li>
            <a href="#">Popular</a>
          </li>
          <li>
            <a href="#">Albums</a>
          </li>
          <li>
            <a href="#">Songs</a>
          </li>
          <li>
            <a href="#">Fans</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <p>
          <i>
            <FaUsers />
          </i>
          12.4M <span>Follower</span>
        </p>
      </div>
      <Audiolist />
    </div>
  );
}

export default Mainmenu;
