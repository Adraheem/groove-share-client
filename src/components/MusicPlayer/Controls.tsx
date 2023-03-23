import React, {useEffect, useRef, useState} from 'react';
import {Button, Slider} from "antd";
import {Icon} from "@iconify/react";
import utils from "../../utils";
import ReactHowler from 'react-howler';
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {playerActions} from "../../redux/reducers/playerSlice";

interface IProps {
}

function Controls(props: IProps) {
  const dispatch = useAppDispatch();
  const {
    repeat,
    shuffle,
    currentSong,
    loading,
    loaded,
    playing
  } = useAppSelector(state => state.player);

  const playerRef = useRef<any>();
  const timerRef = useRef<any>();
  const [state, setState] = useState({
    duration: 0,
    curTime: 0,
  })

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setState(prev => ({
        ...prev,
        curTime: playerRef.current?.seek(),
      }))
    }, 100)

    return () => clearInterval(timerRef.current);
  }, [])

  const handlePlayPause = () => {
    dispatch(playerActions.togglePlaying());
  }

  const handleOnLoad = () => {
    dispatch(playerActions.songLoaded());
    setState(prev => ({
      ...prev,
      duration: playerRef.current?.duration(),
    }));
  }

  const handleRepeat = () => {
    dispatch(playerActions.toggleRepeat());
  }

  const handleShuffle = () => {
    dispatch(playerActions.toggleShuffle());
  }

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center gap-2">
          <Button type="link" onClick={handleShuffle} className={shuffle ? "button-active" : ""}>
            <Icon
              icon="ci:shuffle"
              width={24}
              height={24}
            />
          </Button>
          <Button type="link">
            <Icon icon="ic:baseline-skip-previous" width={24} height={24}/>
          </Button>
          <div className="hover:scale-110">
            <Button className="relative w-20" type="link" disabled={!loaded}
                    onClick={handlePlayPause}>
              <Icon
                icon={loading ? "eos-icons:three-dots-loading" : playing ? "material-symbols:pause-outline" : "material-symbols:play-arrow-rounded"}
                width={52}
                height={52}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)"
                }}/>
            </Button>
          </div>
          <Button type="link">
            <Icon icon="ic:baseline-skip-next" width={24} height={24}/>
          </Button>
          <Button type="link" onClick={handleRepeat} className={repeat ? "button-active" : ""}>
            <Icon
              icon="fluent:arrow-repeat-all-20-filled"
              width={24}
              height={24}
            />
          </Button>
        </div>
        <div className="flex items-center gap-2 max-w-screen-md mx-auto">
          <p
            className="typo-caption w-10">{utils.formatDuration(state.curTime)}</p>
          <div className="flex-1">
            <Slider
              defaultValue={0}
              onChange={(e) => playerRef.current.seek(e)}
              max={state.duration}
              step={0.1}
              value={state.curTime}
              tooltip={{formatter: (value) => value ? utils.formatDuration(value) : "00:00"}}
            />
          </div>
          <p
            className="typo-caption w-10 text-right">{state.duration ? utils.formatDuration(state.duration) : "00:00"}</p>
        </div>
      </div>
      {
        !!currentSong && <ReactHowler
              src={currentSong?.playback}
              playing={playing}
              onLoad={handleOnLoad}
              loop={repeat}
              preload={true}
          // onPlay={handlePlayPause}
          // onPause={handlePlayPause}
              volume={1}
              mute={undefined}
              ref={playerRef}
          />}
    </>
  );
}

export default Controls;
