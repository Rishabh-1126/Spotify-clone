import React, { useState, useRef, useEffect } from "react";
import {
  FaBackward,
  FaForward,
  FaHeart,
  FaPause,
  FaPlay,
  FaRegHeart,
  FaShareAlt,
  FaStepBackward,
  FaStepForward,
} from "react-icons/fa";
import { BsDownload } from "react-icons/bs";
import "../styles/Musicplayer.css";

function Musicplayer({ song, imgsrc }) {
  const [islove, setlove] = useState(false);
  const [isplaying, setplay] = useState(false);
  const audioplayer = useRef(); //our audio tag
  const progressbar = useRef(); //our progress bar
  const animationRef = useRef();

  const [duration, setduration] = useState(0);

  const [currenttime, setcurrenttime] = useState(0);
  // it start rendering once audioplayer laod the meta data and audioplayer is in ready state
  useEffect(() => {
    const second = Math.floor(audioplayer.current.duration);
    setduration(second);
  }, [audioplayer?.current?.loadedmetadata, audioplayer?.current?.readystate]);

  const calculateTime = (sec) => {
    const min = Math.floor(sec / 60);
    const returnmin = min < 10 ? `0${min}` : `${min}`;

    const second = Math.floor(sec % 60);
    const returnsec = second < 10 ? `0${second}` : `${second}`;

    return `${returnmin}:${returnsec}`;
  };

  const whileplaying = () => {
    progressbar.current.value = audioplayer.current.currenttime;
    changecurrenttime();
  };

  const changeprogress = () => {
    audioplayer.current.currenttime = progressbar.current.value;
    changecurrenttime();
  };

  const changecurrenttime = () => {
    progressbar.current.style.setProperty(
      "--played-width",
      `${(progressbar.current.value / duration) * 100}`
    );
    setcurrenttime(progressbar.current.value);
  };

  const playAndpause = () => {
    const prevValue = isplaying;
    if (!prevValue) {
      audioplayer.current.play();
      animationRef.current = requestAnimationFrame(whileplaying);
    } else {
      audioplayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
    setplay(!prevValue);
  };

  const changelove = () => {
    setlove(!islove);
  };

  return (
    <div className="musicplayer">
      <div className="songimg">
        <img src={imgsrc} alt=" " />
      </div>
      <div className="songattributes">
        <audio src={song} preload="metadata" ref={audioplayer}></audio>
        <div className="top">
          <div className="left">
            <div className="loved" onClick={changelove}>
              {islove ? (
                <i>
                  <FaHeart />
                </i>
              ) : (
                <i>
                  <FaRegHeart />
                </i>
              )}
            </div>
            <div className="download">
              <i>
                <BsDownload />
              </i>
            </div>
          </div>
          <div className="middle">
            <div className="back">
              <i>
                <FaStepBackward />
              </i>
              <i>
                <FaBackward />
              </i>
            </div>
            <div className="playpause" onClick={playAndpause}>
              {isplaying ? (
                <i>
                  <FaPause />
                </i>
              ) : (
                <i>
                  <FaPlay />
                </i>
              )}
            </div>
            <div className="forward">
              <i>
                <FaForward />
              </i>
              <i>
                <FaStepForward />
              </i>
            </div>
          </div>
          <div className="right">
            <i>
              <FaShareAlt />
            </i>
          </div>
        </div>
        <div className="bottom">
          <div className="currenttime">{calculateTime(currenttime)}</div>
          <input
            type="range"
            className="progressbar"
            ref={progressbar}
            onChange={changeprogress}
          />
          <div className="duration">
            {duration && !isNaN(duration) && calculateTime(duration)
              ? calculateTime(duration)
              : "00:00"}
          </div>
        </div>
      </div>
    </div>
  );
}

export { Musicplayer };
