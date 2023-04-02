import React from 'react';
import {Link} from "react-router-dom";
import {Button} from "antd";
import PlaylistCard from "../PlaylistCard";
import PlaylistCardLoading from "../PlaylistCard/PlaylistCardLoading";
import {IPlaylist} from "../../types/playlist.types";

interface IProps {
  className?: string;
  showNewButton?: boolean;
  title: string;
  isLoading?: boolean;
  data: IPlaylist[];
}

function PlaylistList({className, showNewButton, title, isLoading, data}: IProps) {
  return (
    <div className={`${className}`}>
      <div className="mb-8 flex items-center gap-5 justify-start">
        <h5 className="leading-none">{title}</h5>
        {
          showNewButton && (
            <Link to="/playlist/add">
              <Button type="primary" size="small">Create new</Button>
            </Link>
          )
        }
      </div>
      <div
        className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 2xl:grid-cols-7 gap-x-3 md:gap-x-6 gap-y-8">
        {
          data.map((playlist, idx) => (
            isLoading ? <PlaylistCardLoading key={idx}/> : <PlaylistCard data={playlist} key={idx}/>
          ))
        }
      </div>
    </div>
  );
}

export default PlaylistList;
