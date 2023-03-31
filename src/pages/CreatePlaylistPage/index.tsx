import {Formik, FormikHelpers} from 'formik';
import React from 'react';
import Container from "../../components/Container";
import PlaylistForm from "../../components/PlaylistForm";
import {IPlaylist} from "../../types/playlist.types";
import playlistService from "../../services/playlist.service";
import {message} from "antd";
import {useNavigate} from "react-router-dom";

interface IProps {
}

function CreatePlaylistPage(props: IProps) {
  const navigate = useNavigate();

  const initialValues: IPlaylist = {
    name: "",
    description: "",
    slug: "",
    isPublic: true
  }

  const onSubmit = (value: IPlaylist, helpers: FormikHelpers<IPlaylist>) => {
    playlistService.createPlaylist(value).then((playlist) => {
      navigate(`/playlist/${playlist.slug}`);
    }).catch((err) => {
      helpers.setSubmitting(false);
      if (err?.response?.data?.data) {
        helpers.setErrors(err.response?.data.data);
      } else if (err?.response?.data?.message) {
        message.open({type: "error", content: err.response?.data?.message});
      } else {
        message.open({type: "error", content: err.message});
      }
    });
  }

  return (
    <Container>
      <div className="max-w-sm my-10">
        <Formik initialValues={initialValues} onSubmit={onSubmit} enableReinitialize>
          {() => (
            <PlaylistForm type="CREATE"/>
          )}
        </Formik>
      </div>
    </Container>
  );
}

export default CreatePlaylistPage;
