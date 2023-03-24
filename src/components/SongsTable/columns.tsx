import {ISong} from "../../types/song.types";
import {ColumnsType} from "antd/es/table";
import utils from "../../utils";
import CurrentlyPlaying from "./CurrentlyPlaying";

const columns: ColumnsType<ISong> = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    className: "w-8 text-center",
    render: (_, record) => (
      <CurrentlyPlaying id={record.id}/>
    )
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    render: (_, record) => (
      <div className="flex items-center gap-3">
        <div className="w-12 aspect-square rounded overflow-hidden drop-shadow-lg bg-slate-200">
          <img src={record.image} alt={record.title} className="image-cover"/>
        </div>
        <div>
          <p className="typo-subtitle leading-none group-hover:text-primary">{record.title}</p>
          <p className="typo-body-small leading-none mt-1">{record.artiste}</p>
        </div>
      </div>
    ),
  },
  {
    title: "Album",
    dataIndex: "albumName",
    key: "albumName"
  },
  {
    title: "Duration",
    dataIndex: "duration",
    key: "duration",
    render: (duration: number) => utils.formatDuration(duration)
  }

];

export default columns;