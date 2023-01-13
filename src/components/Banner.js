import React from "react";
import artist from "../img/artist.jpg";
import check from "../img/check.png";
import { FaEllipsisH, FaHeadphones, FaCheck } from "react-icons/fa";
function Banner() {
  return (
    <div className="Banner">
      <img src={artist} alt="" className="bannerImg" />
      <div className="content">
        <div className="breadcrump">
          <p>
            Home <span>/popular artists</span>
          </p>
          <i>
            <FaEllipsisH />
          </i>
        </div>
        <div className="artist">
          <div className="left">
            <div className="name">
              <h2>A-ha</h2>
              <img src={check} alt="" />
            </div>
            <p>
              <i>
                <FaHeadphones />
              </i>
              11,181,454 <span>Monthly listener's</span>
            </p>
          </div>
          <div className="right">
            <a href="#">Play</a>
            <a href="#">
              <i>
                <FaCheck />
                Following
              </i>
            </a>
          </div>
        </div>
      </div>
      <div className="bottomlayer"></div>
    </div>
  );
}

export { Banner };
