import React from 'react';
import images from "../../assets/images";
import Dot from "../Dot";
import {Link} from "react-router-dom";
import {Icon} from "@iconify/react";

interface IProps {
}

function PlaylistCard(props: IProps) {
  return (
    <Link to="/playlist/wiweudg87ewgd" className="group display-block">
      <div
        className="w-full aspect-square rounded overflow-hidden drop-shadow-lg mb-2 group-hover:scale-95 apply-transition">
        <img src={images.playlistCover} alt="playlist" className="image-cover"/>
      </div>
      <p className="typo-subtitle truncate">AfroB: Afrowave 3</p>
      <div
        className="flex items-center gap-2 flex-wrap typo-caption leading-none mt-2 text-slate-400">
        <p className="truncate">Sir Dean</p>
        <Dot/>
        <p className="break-keep flex gap-1">
          <Icon icon="heroicons-solid:users" width={12} height={12}/> 565k
        </p>
        <Dot/>
        <p>67 songs</p>
      </div>
    </Link>
  );
}

export default PlaylistCard;
