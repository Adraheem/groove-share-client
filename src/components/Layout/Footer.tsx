import React from 'react';
import Container from "../Container";
import {useAppSelector} from "../../redux/hooks";

interface IProps {
}

function Footer(props: IProps) {
  const currentSong = useAppSelector(state => state.player.currentSong);

  return (
    <div className={`pt-10 ${!!currentSong ? "pb-32" : "pb-10"} bg-slate-50`}>
      <Container>
        <p className="text-center">&copy; GrooveShare, {new Date().getFullYear()}</p>
      </Container>
    </div>
  );
}

export default Footer;
