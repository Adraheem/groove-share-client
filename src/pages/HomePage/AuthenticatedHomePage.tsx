import React from 'react';
import Container from "../../components/Container";
import PlaylistList from "../../components/PlaylistList";

interface IProps {
}

function AuthenticatedHomePage(props: IProps) {
  return (
    <Container className="my-8">
      <div className="flex flex-col gap-10">
        <PlaylistList title="My Playlists" showNewButton/>
        <PlaylistList title="Subscriptions"/>
        <PlaylistList title="Recommended Playlists"/>
      </div>
    </Container>
  );
}

export default AuthenticatedHomePage;
