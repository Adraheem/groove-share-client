import React from 'react';
import Container from "../Container";
import Volume from "./Volume";
import Playlist from "./Playlist";
import Controls from "./Controls";
import {useAppSelector} from "../../redux/hooks";

interface IProps {
}

function MusicPlayer(props: IProps) {
  const currentSong = useAppSelector(state => state.player.currentSong);

  if (!currentSong) {
    return null;
  }

  return (
    <div className="w-full fixed bottom-0 p-4 z-10 bg-white border-t border-slate-100">
      <Container className="pl-0 pr-0">
        <div className="flex items-center justify-center gap-5">
          <div className="md:w-1/4 flex-1">
            <div className="flex items-center gap-3">
              <div className="w-12 aspect-square rounded overflow-hidden drop-shadow-sm">
                <img src={currentSong?.image} alt="" className="image-cover"/>
              </div>
              <div>
                <p
                  className="typo-subtitle leading-none group-hover:text-primary">
                  {currentSong?.title}
                </p>
                <p className="typo-body-small leading-none mt-1">{currentSong?.artiste}</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-auto">
            <Controls/>
          </div>

          <div className="w-1/4 hidden md:block">
            <div className="flex items-center gap-2 justify-end">
              <Volume/>
              <Playlist/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MusicPlayer;
