import React, {useEffect} from 'react';
import Container from "../../components/Container";
import PlaylistList from "../../components/PlaylistList";
import {useAppSelector} from "../../redux/hooks";
import playlistService from "../../services/playlist.service";
import {message} from "antd";

interface IProps {
}

function AuthenticatedHomePage(props: IProps) {
  const {isLoading, isLoaded, playlists} = useAppSelector(state => state.playlists);

  useEffect(() => {
    if (!isLoaded) {
      playlistService.getAllContribPlaylists().catch((err) => {
        if (err?.response?.data?.message) {
          message.open({type: "error", content: err.response?.data?.message});
        } else {
          message.open({type: "error", content: err.message});
        }
      });
    }
  }, [isLoaded]);

  return (
    <Container className="my-8">
      <div className="flex flex-col gap-10">
        <PlaylistList title="My Playlists" data={playlists} isLoading={isLoading} showNewButton/>
        {/*<PlaylistList title="Subscriptions"/>*/}
        {/*<PlaylistList title="Recommended Playlists"/>*/}
      </div>
    </Container>
  );
}

export default AuthenticatedHomePage;
