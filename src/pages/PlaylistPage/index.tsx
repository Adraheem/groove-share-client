import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Container from "../../components/Container";
import Dot from "../../components/Dot";
import {Button, message, Segmented} from "antd";
import {Icon} from "@iconify/react";
import EditPlaylist from "./EditPlaylist";
import {IPlaylist, IPlaylistTabOptions} from "../../types/playlist.types";
import Details from "./Details";
import Contributors from "./Contributors";
import {useParams} from "react-router-dom";
import playlistService from "../../services/playlist.service";
import images from "../../assets/images";
import {IPage} from "../../types/IPage.types";
import {ISong} from "../../types/song.types";

interface IProps {
}

function PlaylistPage(props: IProps) {
  const params = useParams();

  const [activeTab, setActiveTab] = useState<IPlaylistTabOptions>("DETAILS");
  const [playlist, setPlaylist] = useState<IPlaylist>();
  const [songs, setSongs] = useState<IPage<ISong>>();

  useEffect(() => {
    if (params.id) {
      setPlaylist(undefined);
      playlistService.getPlaylist(params.id).then((foundPlaylist) => {
        setPlaylist(foundPlaylist);
      }).catch((err) => {
        if (err?.response?.data?.message) {
          message.open({type: "error", content: err.response?.data?.message});
        } else {
          message.open({type: "error", content: err.message});
        }
      });
    }
  }, [params.id]);

  useEffect(() => {
    if (playlist?.id) {
      playlistService.getAllSongs(playlist.id).then((res) => {
        setSongs(res);
      }).catch((err) => {
        if (err?.response?.data?.message) {
          message.open({type: "error", content: err.response?.data?.message});
        } else {
          message.open({type: "error", content: err.message});
        }
      })
    }
  }, [playlist?.id]);

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
        return <Details playlist={playlist} songs={songs?.content}/>;

      case "CONTRIBUTORS":
        return <Contributors/>;
    }
  }, [activeTab, playlist, songs]);

  if (!playlist) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="mb-20">
      <div className="w-full h-56 relative z-[1]">
        <img src={playlist.coverImage || images.playlistDummy} alt=""
             className="image-cover cover-banner"/>
      </div>
      <Container className="-mt-28 relative z-[2]">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/4 xl:w-1/6">
            <div className="aspect-square max-w-xs mx-auto rounded drop-shadow-2xl overflow-hidden">
              <img src={playlist.coverImage || images.playlistDummy}
                   alt=""
                   className="image-cover"/>
            </div>
          </div>
          <div className="w-full md:w-3/4 xl:w-5/6 pt-0 md:pt-20">
            <h1 className="xl:typo-h1 typo-h3">{playlist.name}</h1>
            <div className="flex items-center gap-4">
              <p>Sir Dean</p>
              <Dot/>
              <p>565k followers</p>
              <Dot/>
              <p>67 songs</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 mt-6">
              <EditPlaylist playlist={playlist} setPlaylist={setPlaylist}/>
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
