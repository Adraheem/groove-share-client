import {ColumnsType} from "antd/es/table";
import {IContributor} from "../../../types/playlist.types";
import {Button, Popconfirm, Tag} from "antd";

const columns: ColumnsType<IContributor> = [
  {
    title: "Name",
    dataIndex: "id",
    key: "id",
    className: "",
    render: (_, record) => (
      <>
        {record.user.firstName} {record.user.lastName} {" "}
        {record.isAuthor && <Tag color="red" className="ml-2">Author</Tag>}
      </>
    )
  },
  {
    title: "Action",
    key: "id",
    className: "w-10",
    render: (_, record) => {
      return (
        <Popconfirm
          title="Confirm"
          description={`Remove ${record.user.firstName} as a contributor?`}
          okText="Yes"
          cancelText="No"
          placement="leftTop"
        >
          <Button type="link">Remove</Button>
        </Popconfirm>
      )
    }
  }
]

export default columns;