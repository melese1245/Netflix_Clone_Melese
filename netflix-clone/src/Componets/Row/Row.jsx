// import React, { useState, useEffect} from "react";
// import axios from "../../Utilit/axios"
// import YouTube from "react-youtube";
// import movieTrailer from "movie-trailer";
// import "./Row.css";
// const baseImgUrl="https://image.tmdb.org/t/p/original/";
// function Row( {
//         title, fetchUrl, isLargeRow
//     }
// ) {
//     const [movies, setMovies]=useState([]);
//     const [trailerUrl, setTrailerUrl]=useState("");
//     useEffect(()=> {
//             async function fetchData() {
//                 const request=await axios.get(fetchUrl);
//                 setMovies(request.data.results);
//                 return request; }
//             fetchData();
//         }
//         , [fetchUrl]);
//     const handleClick=(movie)=> {
//         if (trailerUrl) {
//             setTrailerUrl("");
//         }
//         else {
//             movieTrailer(movie?.name || movie?.title || movie?.original_name || movie?.original_title || ""
//             ) .then((url)=> {
//                     const urlParams=new URLSearchParams(new URL(url).search);
//                     setTrailerUrl(urlParams.get("v"));
//             }
//             ) .catch(()=> console.log("Trailer not found"));
//         }
//     }
//     const opts= {
//         height: "390",
//         width: "100%",
//         playerVars: {
//             autoplay: 1
//         }
//     }
//     return (<div className="row"> <h2> {
//             title
//         }
//         </h2> <div className="row-posters"> {
//             movies.map((movie)=> (<img key= {
//                         movie.id  }
//                     onClick= {
//                         ()=> handleClick(movie)
//                     }
//                     className= {
//                         `row-poster $ {
//                             isLargeRow && "row-poster-large"}
//                       `}
//                     src={`${baseImgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
//   alt={movie.name || movie.title}
//                     />)) }
//         </div> {
//             trailerUrl && <YouTube videoId= {
//                 trailerUrl }
//             opts= {opts }  />}
//         </div>);
// }
// export default Row;
import React, { useState, useEffect } from "react";
import axios from "../../Utilit/axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // Fetch movies or TV shows
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  // Handle trailer click
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      const movieTitle =
        movie?.title ||
        movie?.name ||
        movie?.original_title ||
        movie?.original_name ||
        "";
      movieTrailer(movieTitle)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch(() => console.log("Trailer not found"));
    }
  };

  // YouTube player options
  const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 1, // show play/pause buttons, timeline, volume, etc.
    mute: 1,     // mute video
  },
};

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          const posterPath = movie?.poster_path || movie?.backdrop_path;
          const movieTitle =
            movie?.title || movie?.name || movie?.original_title || movie?.original_name;

          if (!posterPath) return null; // skip if no image

          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row-poster ${isLargeRow && "row-poster-large"}`}
              src={`${baseImgUrl}${posterPath}`}
              alt={movieTitle}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;