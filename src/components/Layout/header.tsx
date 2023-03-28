import React from 'react';
import {Link} from "react-router-dom";
import images from "../../assets/images";
import {Button} from "antd";
import {useAppSelector} from "../../redux/hooks";

interface IProps {
}

function Header(props: IProps) {
  const {isAuthenticated} = useAppSelector(state => state.auth);

  return (
    <>
      <div className="w-full fixed top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm">
        <header className="px-5 max-w-screen-2xl h-16 mx-auto flex justify-between">
          <Link to="/" className="flex items-center">
            <img src={images.Logo} alt="Logo" className="h-4"/>
          </Link>
          <ul className="flex gap-2 items-center">
            {
              isAuthenticated ? (
                <li>
                  <Link to="">
                    <img
                      src={images.userProfilePic}
                      alt="User Profile"
                      className="w-10 aspect-square object-cover object-center rounded"
                    />
                  </Link>
                </li>
              ) : (
                <>
                  <li><Link to="/login"><Button>Login</Button></Link></li>
                  <li><Link to="/signup"><Button type="primary">Get Started</Button></Link></li>
                </>
              )
            }
          </ul>
        </header>
      </div>
      <div className="w-full h-16"/>
    </>
  );
}

export default Header;
