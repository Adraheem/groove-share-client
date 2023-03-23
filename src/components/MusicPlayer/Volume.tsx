import React from 'react';
import {Icon} from "@iconify/react";
import {Button, Slider} from "antd";

interface IProps {
}

function Volume(props: IProps) {
  return (
    <div className="flex items-center gap-2">
      <Button type="link" className="px-1">
        <Icon icon="tabler:volume" width={24} height={24}/>
      </Button>
      <div className="w-20">
        <Slider/>
      </div>
    </div>
  );
}

export default Volume;
