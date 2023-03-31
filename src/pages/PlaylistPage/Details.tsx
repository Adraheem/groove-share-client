import React from 'react';
import SongsTable from "../../components/SongsTable";
// import songs from "../../assets/data/songs";
import {IPlaylist} from "../../types/playlist.types";
import isEmpty from "is-empty";
import { ISong } from '../../types/song.types';

interface IProps {
  playlist?: IPlaylist;
  songs?: ISong[];
}

function Details({playlist, songs}: IProps) {
  return (
    <div>
      {
        !isEmpty(playlist?.description) && (
          <div className="max-w-screen-md">
            <p className="typo-subtitle-small">Description</p>
            <p>{playlist?.description}</p>
          </div>
        )
      }

      <div className="mt-6">
        <SongsTable data={songs}/>
      </div>
    </div>
  );
}

export default Details;
