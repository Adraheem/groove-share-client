import React from 'react';
import {useAppSelector} from "../../redux/hooks";
import {Navigate, Outlet} from "react-router-dom";

interface IProps {
}

function UnAuthLayout(props: IProps) {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  if (isAuthenticated) {
    return <Navigate to="/"/>
  }

  return (
    <Outlet/>
  );
}

export default UnAuthLayout;
