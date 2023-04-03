import React, {useEffect, useState} from 'react';
import {message, Table} from "antd";
import columns from "./columns";
import AddContributor from "./AddContributor";
import {IContributor} from "../../../types/playlist.types";
import playlistService from "../../../services/playlist.service";

interface IProps {
  playlistId?: number
}

function Contributors({playlistId}: IProps) {
  const [loading, setLoading] = useState(true);
  const [contributors, setContributors] = useState<IContributor[]>([]);

  const addContributor = (e: IContributor) => {
    setContributors(prev => [...prev, e]);
  }

  useEffect(() => {
    if (playlistId) {
      playlistService.getAllContributors(playlistId).then((res) => {
        setLoading(false);
        setContributors(res);
      }).catch((err) => {
        if (err?.response?.data?.message) {
          message.open({type: "error", content: err.response?.data?.message});
        } else {
          message.open({type: "error", content: err.message});
        }
      })
    }
  }, [playlistId]);

  return (
    <div>
      <h5>Contributors</h5>
      <p className="max-w-screen-md">Control who has access to add/remove songs from this
        playlist</p>

      <div className="mt-5">
        <Table
          columns={columns}
          dataSource={contributors}
          rowKey="id"
          rowClassName="group cursor-pointer"
          pagination={false}
          loading={loading}
        />
      </div>
      {
        !!playlistId && <AddContributor playlistId={playlistId} addContributor={addContributor}/>
      }
    </div>
  );
}

export default Contributors;
