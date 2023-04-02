import React from 'react';
import Dot from "../Dot";
import Skeleton from "react-loading-skeleton";

interface IProps {
}

function PlaylistCardLoading(props: IProps) {
  return (
    <div className="select-none">
      <div
        className="w-full aspect-square rounded overflow-hidden mb-2">
        <Skeleton className="h-full w-full"/>
      </div>
      <p><Skeleton className="w-5/6"/></p>
      <div
        className="flex items-center gap-2 flex-wrap typo-caption leading-none mt-2 text-slate-400">
        <p><Skeleton className="w-8"/></p>
        <Dot/>
        <p>
          <Skeleton className="w-8"/>
        </p>
        <Dot/>
        <p><Skeleton className="w-8"/></p>
      </div>
    </div>
  );
}

export default PlaylistCardLoading;
