import React, {useState} from 'react';
import {Button, Input, message, Modal} from "antd";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import {IAddContributorToPlaylistRequest, IContributor} from "../../../types/playlist.types";
import playlistService from "../../../services/playlist.service";
import regexPattern from "../../../assets/data/regexPattern";

interface IProps {
  playlistId: number,
  addContributor: (e: IContributor) => void;
}

function AddContributor({playlistId, addContributor}: IProps) {
  const [isOpen, setOpen] = useState(false);

  const validationSchema = yup.object().shape({
    username: yup.string()
      .matches(regexPattern.username.regex, regexPattern.username.message)
      .required("Required")
      .nullable(),
  });

  const initialValue: IAddContributorToPlaylistRequest = {
    username: "",
    playlistId
  }

  const onSubmit = (value: IAddContributorToPlaylistRequest, helpers: FormikHelpers<IAddContributorToPlaylistRequest>) => {
    playlistService.addContributorToPlaylist(value).then((res) => {
      addContributor(res);
      helpers.setSubmitting(false);
      helpers.resetForm();
      message.open({type: "success", content: "Contributor added successfully"})
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
    <div className="mt-5">
      <Button onClick={() => setOpen(true)} type="primary">Add new</Button>

      <Formik
        initialValues={initialValue}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        enableReinitialize>
        {({handleSubmit, isSubmitting, isValid}) => (
          <Modal
            open={isOpen}
            onCancel={handleClose}
            okText="Invite"
            onOk={() => handleSubmit()}
            confirmLoading={isSubmitting}
            okButtonProps={{disabled: !isValid}}
            className="max-w-sm">
            <div>
              <h3>Invite contributor</h3>
              <p>Add a new user to contribute to your playlist</p>

              <Form className="flex flex-col mt-4 mb-6 gap-5">
                <Field name="username">
                  {({field, meta}: FieldProps) => (
                    <div>
                      <label>
                        <span className="flex">Username</span>
                        <Input
                          type="text"
                          size="large"
                          placeholder="E.g. @johndoe"
                          autoComplete="off"
                          {...field}
                        />
                      </label>
                    </div>
                  )}
                </Field>
              </Form>
            </div>
          </Modal>
        )}
      </Formik>
    </div>
  );
}

export default AddContributor;
