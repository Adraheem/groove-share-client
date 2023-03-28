import {IContributor} from "../../types/playlist.types";

const contributors: IContributor[] = [
  {
    id: 1,
    user: {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      emailAddress: "john@gmail.com",
    },
    isAuthor: true
  }
];

export default contributors;