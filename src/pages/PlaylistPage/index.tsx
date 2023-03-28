import React, {useCallback, useMemo, useState} from 'react';
import Container from "../../components/Container";
import Dot from "../../components/Dot";
import {Button, Segmented} from "antd";
import {Icon} from "@iconify/react";
import EditPlaylist from "./EditPlaylist";
import {IPlaylistTabOptions} from "../../types/playlist.types";
import Details from "./Details";
import Contributors from "./Contributors";

interface IProps {
}

function PlaylistPage(props: IProps) {
  const [activeTab, setActiveTab] = useState<IPlaylistTabOptions>("DETAILS");

  const tabOptions = useMemo(() => {
    return ([
      {
        label: "Details",
        value: "DETAILS"
      },
      {
        label: "Contributors",
        value: "CONTRIBUTORS"
      },
    ])
  }, []);

  const ActiveTabElement = useCallback(() => {
    switch (activeTab) {
      case "DETAILS":
        return <Details/>;

      case "CONTRIBUTORS":
        return <Contributors/>;
    }
  }, [activeTab]);

  return (
    <div className="mb-20">
      <div className="w-full h-56 relative z-[1]">
        <img src="https://i.scdn.co/image/ab67616d00001e02e5e0f9c3a32986fa9d261541" alt=""
             className="image-cover cover-banner"/>
      </div>
      <Container className="-mt-28 relative z-[2]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/4 xl:w-1/6">
            <div className="aspect-square max-w-xs mx-auto rounded drop-shadow-2xl overflow-hidden">
              <img src="https://i.scdn.co/image/ab67616d00001e02e5e0f9c3a32986fa9d261541" alt=""
                   className="image-cover"/>
            </div>
          </div>
          <div className="w-full md:w-3/4 xl:w-5/6 pt-0 md:pt-20">
            <h1 className="xl:typo-h1 typo-h3">AfroB: Afrowave 3</h1>
            <div className="flex items-center gap-4">
              <p>Sir Dean</p>
              <Dot/>
              <p>565k followers</p>
              <Dot/>
              <p>67 songs</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <EditPlaylist/>
              <Button type="primary" size="large" className="px-6">
                <span className="flex items-center gap-2">
                  <Icon icon="material-symbols:play-arrow-rounded"/> Play
                </span>
              </Button>
              <Button type="primary" size="large" className="px-6">
                <span className="flex items-center gap-2">
                  <Icon icon="ci:shuffle"/> Shuffle
                </span>
              </Button>
            </div>

            <Segmented
              size="large"
              className="my-6"
              onChange={(e) => setActiveTab(e as IPlaylistTabOptions)}
              options={tabOptions}
            />

            <div>
              <ActiveTabElement/>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PlaylistPage;
