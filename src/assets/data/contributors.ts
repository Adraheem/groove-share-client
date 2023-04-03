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
    author: false
  },
  {
    id: 2,
    user: {
      id: 2,
      firstName: "Will",
      lastName: "Smith",
      emailAddress: "john@gmail.com",
    },
    author: true
  },
  {
    id: 3,
    user: {
      id: 3,
      firstName: "Karen",
      lastName: "Foo",
      emailAddress: "john@gmail.com",
    },
    author: false
  },
];

export default contributors;