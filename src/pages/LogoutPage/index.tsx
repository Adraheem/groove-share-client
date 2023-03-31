import React from 'react';
import {useAppDispatch} from "../../redux/hooks";
import {authActions} from "../../redux/reducers/authSlice";
import {useNavigate} from "react-router-dom";

interface IProps {
}

function LogoutPage(props: IProps) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  React.useEffect(() => {
    dispatch(authActions.logout());
    navigate("/");
  }, [dispatch, navigate])

  return (
    <div className="text-center py-20">
      <p>Logging out...</p>
    </div>
  );
}

export default LogoutPage;
