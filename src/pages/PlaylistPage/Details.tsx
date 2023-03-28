import React from 'react';
import SongsTable from "../../components/SongsTable";
import songs from "../../assets/data/songs";

interface IProps {
}

function Details(props: IProps) {
  return (
    <div>
      <div className="max-w-screen-md">
        <p className="typo-subtitle-small">Description</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae scelerisque
          dolor. Etiam egestas lobortis efficitur. Cras tempus sit amet quam a pharetra.
          Maecenas sed posuere turpis. Cras vel lacus tortor.</p>
      </div>

      <div className="mt-6">
        <SongsTable data={songs}/>
      </div>
    </div>
  );
}

export default Details;
