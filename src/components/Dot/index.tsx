import React from 'react';

interface IProps {
}

function Dot(props: IProps) {
  return (
    <div className={`w-1 h-1 rounded-2xl`} style={{backgroundColor: "currentcolor"}}/>
  );
}

export default Dot;
