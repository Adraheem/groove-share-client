import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PlaylistPage from "../pages/PlaylistPage";
import Layout from "../components/Layout";
import SearchPage from "../pages/SearchPage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import CreatePlaylistPage from "../pages/CreatePlaylistPage";
import UnAuthLayout from "../components/Layout/UnAuthLayout";
import AuthLayout from "../components/Layout/AuthLayout";

interface IProps {
}

function RootNavigation(props: IProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<HomePage/>}/>

          <Route element={<UnAuthLayout/>}>
            <Route path="login" element={<LoginPage/>}/>
            <Route path="signup" element={<SignupPage/>}/>
          </Route>

          <Route element={<AuthLayout/>}>
            <Route path="search" element={<SearchPage/>}/>
            <Route path="playlist">
              <Route path="add" element={<CreatePlaylistPage/>}/>
              <Route path=":id">
                <Route path="" element={<PlaylistPage/>}/>
              </Route>
            </Route>
          </Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootNavigation;
