import React from 'react';
import Header from "./header";
import {Outlet} from "react-router-dom";
import MusicPlayer from "../MusicPlayer";
import Footer from "./Footer";

interface IProps {
}

function Layout(props: IProps) {
  return (
    <div className="min-w-screen min-h-screen">
      <Header/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      <MusicPlayer/>
    </div>
  );
}

export default Layout;
