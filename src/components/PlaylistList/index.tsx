import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import PlaylistCard from "../PlaylistCard";

interface IProps {
  className?: string;
  showNewButton?: boolean;
  title: string;
}

function PlaylistList({className, showNewButton, title}: IProps) {
  return (
    <div className={`${className}`}>
      <div className="mb-8 flex items-center gap-5 justify-start">
        <h5 className="leading-none">{title}</h5>
        {
          showNewButton && (
            <Link to="">
              <Button type="primary" size="small">Create new</Button>
            </Link>
          )
        }
      </div>
      <div
        className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 2xl:grid-cols-7 gap-x-3 md:gap-x-6 gap-y-8">
        {
          [...Array(6)].map((_, idx) => (
            <PlaylistCard key={idx}/>
          ))
        }
      </div>
    </div>
  );
}

export default PlaylistList;
