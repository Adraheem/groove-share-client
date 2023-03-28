import {ColumnsType} from "antd/es/table";
import {IContributor} from "../../../types/playlist.types";
import {Tag} from "antd";

const columns: ColumnsType<IContributor> = [
  {
    title: "Name",
    dataIndex: "id",
    key: "id",
    className: "w-6 md:w-8 text-left",
    render: (_, record) => (
      <>
        {record.user.firstName} {record.user.lastName} {" "}
        {record.isAuthor && <Tag color="red" className="ml-2">Author</Tag>}
      </>
    )
  }
]

export default columns;