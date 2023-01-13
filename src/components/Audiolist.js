import React, { useState, useEffect } from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Musicplayer } from "./Musicplayer";
import { Songs } from "./Songs";
// we directly using the usestate  from component { Songs } so it re-rendering i.e not working
// therefore we frst set this component to state
function Audiolist() {
  const [songs, setsongs] = useState(Songs);
  // const [songs, setsongs] = useState(Songs); making imported component into state songs
  const [song, setsong] = useState(Songs[0].song);
  const [img, setimg] = useState(Songs[0].imgSrc);

  useEffect(() => {
    const songs = document.querySelectorAll(".songs");
    console.log(songs);

    function changeActive() {
      songs.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    songs.forEach((n) => n.addEventListener("click", changeActive));
  }, []);

  const changefav = (id) => {
    Songs.forEach((song) => {
      if (song.id == id) song.favourite = !song.favourite;

      // instead of creating new variable we will  reference
      setsongs([...Songs]);
    });
  };

  const setMainsong = (songsrc, imgsrc) => {
    setsong(songsrc);
    setimg(imgsrc);
  };
  return (
    <div className="audiolist">
      <h2 className="title">
        The list <span>{`${Songs.length} songs`}</span>
      </h2>

      <div className="songcontainer">
        {songs &&
          songs.map((song, index) => (
            <div
              className="songs"
              key={song?.id}
              onClick={() => setMainsong(song?.song, song?.imgSrc)}
            >
              <div className="count">{`#${index + 1}`}</div>
              <div className="song">
                <div className="imgbox">
                  <img src={song?.imgSrc} alt="" />
                </div>
                <div className="section">
                  <p className="songName">
                    {song?.songName}
                    <span className="spanArtist">{song?.artist}</span>
                  </p>
                  <div className="hits">
                    <p className="hit">
                      <i>
                        <FaHeadphones />
                      </i>
                      12,988
                    </p>
                    <p className="duration">
                      <i>
                        <FaRegClock />
                      </i>
                      03:04
                    </p>
                    <div
                      className="favourite"
                      onClick={() => changefav(song?.id)}
                    >
                      {
                        // if song  favourite is true
                        song?.favourite ? (
                          <i>
                            <FaHeart />
                          </i>
                        ) : (
                          // if song favourite is false
                          <i>
                            <FaRegHeart />
                          </i>
                        )
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
      <Musicplayer song={song} imgsrc={img} />
    </div>
  );
}

export { Audiolist };
