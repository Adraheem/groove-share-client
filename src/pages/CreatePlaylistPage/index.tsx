import {Formik} from 'formik';
import React from 'react';
import Container from "../../components/Container";
import PlaylistForm from "../../components/PlaylistForm";

interface IProps {
}

function CreatePlaylistPage(props: IProps) {
  return (
    <Container>
      <div className="max-w-sm my-10">
        <Formik initialValues={{}} onSubmit={() => {
        }}>
          {() => (
            <PlaylistForm type="CREATE"/>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default CreatePlaylistPage;
