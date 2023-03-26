import React, {useMemo, useState} from 'react';
import {Field, FieldProps, Form, useFormikContext} from "formik";
import {Button, Input, Switch} from "antd";
import images from "../../assets/images";

interface IProps {
  type: "CREATE" | "EDIT";
  className?: string;
}

function PlaylistForm({type, className}: IProps) {
  const [file, setFile] = useState<File | null>(null);
  const {isSubmitting, handleSubmit} = useFormikContext();

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e?.target.files)
    if (e?.target.files) {
      setFile(e?.target.files[0]);
    }
  }

  const cover = useMemo(() => {
    if (file) {
      return URL.createObjectURL(file);
    } else {
      return images.playlistDummy;
    }
  }, [file]);

  return (
    <div className={className}>
      <h3 className="">{type === "CREATE" ? "Create new playlist" : "Edit playlist"}</h3>
      <p className="">{
        type === "CREATE"
          ? `Create your collection of songs to share to your loved ones`
          : `Update your playlist information`}
      </p>

      <div className="mt-10 max-w-sm mx-auto">

        <Form className="flex flex-col gap-5">
          <div>
            <label className="inline-block cursor-pointer">
              <div className="w-24 aspect-square rounded overflow-hidden">
                <input type="file" accept="image/*" className="hidden" onChange={onChange}/>
                <img src={cover} alt="playlist" className="image-cover"/>
              </div>
              <p className="typo-caption mt-2">Click on cover to change</p>
            </label>
          </div>

          <Field name="title">
            {({field, meta}: FieldProps) => (
              <div>
                <label>
                  <span className="flex">Playlist title</span>
                  <Input type="text" size="large"
                         placeholder="E.g. African vibez" {...field}/>
                </label>
              </div>
            )}
          </Field>

          <Field name="description">
            {({field, meta}: FieldProps) => (
              <div>
                <label>
                  <span className="flex">Description</span>
                  <Input.TextArea size="large" placeholder="Description"
                                  autoSize {...field}/>
                </label>
              </div>
            )}
          </Field>

          <Field name="isPrivate">
            {({field, meta}: FieldProps) => (
              <div className="flex justify-between items-center">
                <p>Private</p>
                <Switch/>
              </div>
            )}
          </Field>

          {
            type === "EDIT" || (
              <div>
                <Button
                  type="primary"
                  size="large"
                  className=""
                  loading={isSubmitting}
                  onClick={() => handleSubmit()}>
                  Create
                </Button>
              </div>
            )
          }
        </Form>
      </div>
    </div>
  );
}

export default PlaylistForm;
