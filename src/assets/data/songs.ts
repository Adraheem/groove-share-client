import {ISong} from "../../types/song.types";
import songFiles from "./songFiles";

const songs: ISong[] = [
  {
    id: 1,
    title: "Folake",
    artiste: "Boy Spyce",
    image: "https://assets.audiomack.com/boyspyce/f2aaf8747eb99b399fd14bf849ac4c12ba7ec851fcea65733b21032113bf57d9.png?width=1500&height=1500&max=true",
    albumName: "More Love, Less Ego",
    duration: 766,
    playback: songFiles.folake,
  },
  {
    id: 2,
    title: "GWAGWALADA",
    artiste: "BNXN fka Buju",
    image: "https://assets.audiomack.com/bnxn/a8b0c8c34c45d2a987b81367a246b8ea9fc6761e2262a277e219e4e5cdba8e3f.jpeg?width=1500&height=1500&max=true",
    albumName: "GWAGWALADA",
    duration: 686,
    playback: songFiles.gwagwalada,
  },
  {
    id: 3,
    title: "Party No Dey Stop",
    artiste: "Adekunle Gold, Zinoleesky",
    image: "https://assets.audiomack.com/adekunlegold/e01af9c735a6ca147ba9464381421a3c8d22959b26467f0d4175f3d7b524b470.jpeg?width=1500&height=1500&max=true",
    albumName: "Overloading (OVERDOSE)",
    duration: 766,
    playback: songFiles.zino,
  },
  {
    id: 4,
    title: "Chance (Na Ham)",
    artiste: "Seyi Vibez",
    image: "https://assets.audiomack.com/seyivibezmusic/03dc79aa7784166286e3a31211f0eb4deaff8f601280005d1ac681dc45d0752e.png?width=1500&height=1500&max=true",
    albumName: "Calm Down",
    duration: 768,
    playback: songFiles.folake,
  },
  // {
  //   id: 5,
  //   title: "KU LO SA - A COLORS SHOW",
  //   artiste: "Oxlade",
  //   image: "",
  //   albumName: "KU LO SA - A COLORS SHOW",
  //   duration: 86,
  //   playback: songFiles.folake,
  // },
  // {
  //   id: 6,
  //   title: "One Of A Kind",
  //   artiste: "Jaido P",
  //   image: "",
  //   albumName: "One Of A Kind",
  //   duration: 66,
  //   playback: songFiles.folake,
  // },
];

export default songs;