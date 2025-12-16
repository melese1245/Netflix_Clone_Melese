import React from "react";
import requests from "../../../Utilit/requests";
import Row from "../Row";

function RowList() {
  return (
    <>
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row
        title="TopRatedMovies"
        fetchUrl={requests.fetchTopRatedMovies}
        isLargeRow={true}
      />
      <Row
        title="ActionMovies"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}
      />
      <Row
        title="ComedyMovies"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}
      />
       <Row
        title="HorrorMovies"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}
      />
       <Row
        title="RomanceMovies"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}
      />
     <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}
      />
       <Row
        title="TvShows"
        fetchUrl={requests.fetchTvShows}
        isLargeRow={true}
      />
    </>
  );
}
export default RowList;