import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from '../components/Content'
import Search from "../components/Search";
import Core from '../components/Core'
import './Home.css'
import Mission from "../components/Mission";
const Home = () => {
  return (
    < >
      <div className="bg-black" >
        <Navbar />
      </div>
      <Search />
<div></div>
<Mission></Mission>

<Content/>
<Core>

</Core>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
