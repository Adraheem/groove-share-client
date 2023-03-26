import React, {useState} from 'react';
import {Icon} from "@iconify/react";
import {Button, Modal} from "antd";
import PlaylistForm from "../../components/PlaylistForm";
import {Formik} from 'formik';

interface IProps {
}

function EditPlaylist(props: IProps) {
  const [isOpen, setOpen] = useState(false);

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

      <Formik initialValues={{}} onSubmit={() => {
      }}>
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
