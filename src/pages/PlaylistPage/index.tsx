import React from 'react';
import Container from "../../components/Container";
import images from "../../assets/images";
import Dot from "../../components/Dot";
import {Button} from "antd";
import SongsTable from "../../components/SongsTable";
import songs from "../../assets/data/songs";

interface IProps {
}

function PlaylistPage(props: IProps) {
  return (
    <div className="mb-20">
      <div className="w-full h-48 relative z-[1]">
        <img src={images.playlistCover} alt="" className="image-cover cover-banner"/>
      </div>
      <Container className="-mt-28 relative z-[2]">
        <div className="flex gap-5">
          <div className="w-1/6">
            <div className="aspect-square rounded drop-shadow-2xl overflow-hidden">
              <img src={images.playlistCover} alt="" className="image-cover"/>
            </div>
          </div>
          <div className="w-5/6 pt-20">
            <h1>AfroB: Afrowave 3</h1>
            <div className="flex items-center gap-4">
              <p>Sir Dean</p>
              <Dot/>
              <p>565k followers</p>
              <Dot/>
              <p>67 songs</p>
            </div>
            <div className="flex items-center gap-2 mt-6">
              <Button type="primary" size="large" className="px-6">Play</Button>
              <Button type="primary" size="large" className="px-6">Shuffle</Button>
            </div>

            <div className="max-w-screen-md mt-6">
              <p className="typo-subtitle-small">Description</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae scelerisque
                dolor. Etiam egestas lobortis efficitur. Cras tempus sit amet quam a pharetra.
                Maecenas sed posuere turpis. Cras vel lacus tortor.</p>
            </div>

            <div className="mt-6">
              <SongsTable data={songs}/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PlaylistPage;
