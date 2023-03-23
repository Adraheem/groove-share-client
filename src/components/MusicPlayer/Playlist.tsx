import React from 'react';
import {Icon} from "@iconify/react";
import {Button} from "antd";

interface IProps {
}

function Playlist(props: IProps) {
  return (
    <Button type="link">
      <Icon icon="tabler:playlist" width={24} height={24}/>
    </Button>
  );
}

export default Playlist;
