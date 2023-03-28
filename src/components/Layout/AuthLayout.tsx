import React from 'react';
import {Navigate, Outlet} from 'react-router-dom';
import {useAppSelector} from "../../redux/hooks";

interface IProps {
}

function AuthLayout(props: IProps) {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/"/>
  }

  return (
    <Outlet/>
  );
}

export default AuthLayout;
