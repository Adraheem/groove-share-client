import React from 'react';
import {Link} from "react-router-dom";
import images from "../../assets/images";
import {Button} from "antd";

interface IProps {
}

function Header(props: IProps) {
  return (
    <div>
      <header className="px-5 max-w-screen-2xl h-16 mx-auto flex justify-between">
        <Link to="/" className="flex items-center">
          <img src={images.Logo} alt="Logo" className="h-4"/>
        </Link>
        <ul className="flex gap-2 items-center">
          <li><Button>Login</Button></li>
          <li><Button type="primary">Get Started</Button></li>
        </ul>
      </header>
    </div>
  );
}

export default Header;
