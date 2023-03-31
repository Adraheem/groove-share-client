import React from 'react';
import {Table} from "antd";
import columns from "./columns";
import {ISong} from "../../types/song.types";
import playerService from "../../services/player.service";


interface IProps {
  data?: ISong[];
}

function SongsTable({data}: IProps) {
  console.log(data)
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data || []}
        loading={typeof data === "undefined"}
        rowKey="id"
        rowClassName="group cursor-pointer"
        pagination={false}
        onRow={(record, rowIndex) => {
          return ({
            onClick: () => {
              !!data &&
              playerService.playPlaylist(data, record.id)
            },
          })
        }}
      />
    </div>
  );
}

export default SongsTable;
