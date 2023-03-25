import React from 'react';
import Lottie from "lottie-react";
import images from "../../assets/images";
import {Icon} from "@iconify/react";
import {useAppSelector} from "../../redux/hooks";

interface IProps {
  id: number;
}

function CurrentlyPlaying({id}: IProps) {
  const currentSong = useAppSelector(state => state.player.currentSong);

  if (currentSong?.id === id) {
    return (
      <div className="w-4 mx-auto">
        <Lottie animationData={images.nowPlaying} height={12} width={12}/>
      </div>);
  }

  return (
    <>
      <div className="w-6 md:w-8 text-center group-hover:display-none">{id}</div>
      <div className="w-6 md:w-8 text-center display-none group-hover:display-block text-primary">
        <Icon
          icon="material-symbols:play-arrow-rounded"
          width={24}
          height={24}/>
      </div>
    </>
  );
}

export default CurrentlyPlaying;
