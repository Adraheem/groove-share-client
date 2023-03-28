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
    isAuthor: false
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: "Will",
      lastName: "Smith",
      emailAddress: "john@gmail.com",
    },
    isAuthor: true
  },
  {
    id: 3,
    user: {
      id: 3,
      firstName: "Karen",
      lastName: "Foo",
      emailAddress: "john@gmail.com",
    },
    isAuthor: false
  },
];

export default contributors;