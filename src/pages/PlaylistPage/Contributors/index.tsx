import React from 'react';
import {Table} from "antd";
import contributors from "../../../assets/data/contributors";
import columns from "./columns";
import AddContributor from "./AddContributor";

interface IProps {
}

function Contributors(props: IProps) {
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
        />
      </div>

      <AddContributor/>
    </div>
  );
}

export default Contributors;
