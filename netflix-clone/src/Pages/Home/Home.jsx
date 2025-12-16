import React from 'react';
import Header from "../../Componets/Header/Header.jsx";
import Footer from "../../Componets/Footer/Footer.jsx"
import Banner from "../../Componets/Banner/Banner.jsx"
import RowList from '../../Componets/Row/RowList/RowList.jsx';

function Home() {
  return (
    <>
       <Header/> 
        <Banner/>
        <RowList/>
       <Footer/> 
    </>
  );
}

export default Home;