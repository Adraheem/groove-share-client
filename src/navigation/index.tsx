import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlaylistPage from "../pages/PlaylistPage";
import Layout from "../components/Layout";
import SearchPage from "../pages/SearchPage";

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<PlaylistPage/>}/>
          <Route path="search" element={<SearchPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;