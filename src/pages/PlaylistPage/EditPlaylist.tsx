import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import {Button, message, Modal} from "antd";
import PlaylistForm from "../../components/PlaylistForm";
import {Formik, FormikHelpers} from 'formik';
import {IPlaylist} from "../../types/playlist.types";
import playlistService from "../../services/playlist.service";

interface IProps {
  playlist: IPlaylist;
  setPlaylist(playlist: IPlaylist): void;
}

function EditPlaylist({playlist, setPlaylist}: IProps) {
  const [isOpen, setOpen] = useState(false);

  const onSubmit = (value: IPlaylist, helpers: FormikHelpers<IPlaylist>) => {
    playlistService.updatePlaylist(value).then((savedPlaylist) => {
      setPlaylist(savedPlaylist);
      setOpen(false);
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

  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <Button type="default" size="large" className="px-6" onClick={() => setOpen(true)}>
        <span className="flex items-center gap-2">
          <Icon icon="ic:round-mode-edit"/> Edit
        </span>
      </Button>

      <Formik initialValues={playlist} onSubmit={onSubmit} enableReinitialize>
        {({handleSubmit, isSubmitting}) => (
          <Modal
            open={isOpen}
            onCancel={handleClose}
            onOk={() => handleSubmit()}
            confirmLoading={isSubmitting}
            className="max-w-sm">
            <PlaylistForm type="EDIT" className="pt-4 pb-10"/>
          </Modal>
        )}
      </Formik>
    </>
  );
}

export default EditPlaylist;
