import React, {useState} from 'react';
import {Button, Input, Modal} from "antd";
import {Field, FieldProps, Form, Formik} from "formik";

interface IProps {
}

function AddContributor(props: IProps) {
  const [isOpen, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div className="mt-5">
      <Button onClick={() => setOpen(true)} type="primary">Add new</Button>

      <Formik initialValues={{}} onSubmit={() => {
      }}>
        {({handleSubmit, isSubmitting}) => (
          <Modal
            open={isOpen}
            onCancel={handleClose}
            okText="Invite"
            onOk={() => handleSubmit()}
            confirmLoading={isSubmitting}
            className="max-w-sm">
            <div>
              <h3>Invite contributor</h3>
              <p>Add a new user to contribute to your playlist</p>

              <Form className="flex flex-col mt-4 mb-6 gap-5">
                <Field name="name">
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
