import React from 'react';
import AuthenticatedHomePage from "./AuthenticatedHomePage";
import {useAppSelector} from "../../redux/hooks";
import UnAuthenticatedHomePage from "./UnAuthenticatedHomePage";

interface IProps {
}

function HomePage(props: IProps) {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  return (
    isAuthenticated ? <AuthenticatedHomePage/> : <UnAuthenticatedHomePage/>
  );
}

export default HomePage;
