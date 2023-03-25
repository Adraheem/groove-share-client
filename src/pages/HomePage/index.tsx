import React from 'react';
import AuthenticatedHomePage from "./AuthenticatedHomePage";

interface IProps {
}

function HomePage(props: IProps) {
  return (
    <AuthenticatedHomePage/>
  );
}

export default HomePage;
