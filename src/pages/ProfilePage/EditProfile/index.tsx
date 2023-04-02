import React from 'react';
import * as yup from "yup";
import {IUser} from "../../../types/auth.types";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import authService from "../../../services/auth.service";
import {Button, Input, message} from "antd";
import InputErrorComponent from "../../../components/InputErrorComponent";
import {useAppSelector} from "../../../redux/hooks";

interface IProps {
}

function EditProfilePage(props: IProps) {
  const {userDetails} = useAppSelector(state => state.auth);

  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required").nullable(),
    lastName: yup.string().required("Required").nullable(),
    emailAddress: yup.string().email("Invalid email format").required("Required").nullable(),
    username: yup.string()
      .matches(/^[a-zA-Z0-9_]{6,20}$/, `Username can only contain letters, numbers of 6 - 20 characters`)
      .required("Required")
      .nullable(),
  });

  const initialValue: IUser = userDetails || {
    firstName: "",
    lastName: "",
    emailAddress: "",
    username: "",
  }

  const onSubmit = (value: IUser, helpers: FormikHelpers<IUser>) => {
    authService.updateUserDetails(value).then(() => {
      message.open({type: "success", content: "Updated user details successfully!"})
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
    <div>
      <h3>Edit Profile</h3>

      <div className="mt-10 max-w-sm">
        <Formik
          initialValues={initialValue}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          enableReinitialize>
          {({isSubmitting, isValid, handleSubmit}) => (
            <Form className="flex flex-col gap-5">
              <Field name="firstName">
                {({field, meta}: FieldProps) => (
                  <div>
                    <label>
                      <span className="flex">First Name</span>
                      <Input
                        type="text"
                        size="large"
                        placeholder="First Name"
                        status={meta.touched && meta.error ? "error" : undefined}
                        {...field}
                      />
                    </label>
                    <InputErrorComponent name={field.name}/>
                  </div>
                )}
              </Field>

              <Field name="lastName">
                {({field, meta}: FieldProps) => (
                  <div>
                    <label>
                      <span className="flex">Last Name</span>
                      <Input
                        type="text"
                        size="large"
                        placeholder="Last Name"
                        status={meta.touched && meta.error ? "error" : undefined}
                        {...field}
                      />
                    </label>
                    <InputErrorComponent name={field.name}/>
                  </div>
                )}
              </Field>

              <Field name="username">
                {({field, meta}: FieldProps) => (
                  <div>
                    <label>
                      <span className="flex">Username</span>
                      <Input
                        type="email"
                        size="large"
                        placeholder="Username"
                        status={meta.touched && meta.error ? "error" : undefined}
                        {...field}
                      />
                    </label>
                    <InputErrorComponent name={field.name}/>
                  </div>
                )}
              </Field>

              <Field name="emailAddress">
                {({field, meta}: FieldProps) => (
                  <div>
                    <label>
                      <span className="flex">Email</span>
                      <Input
                        type="email"
                        size="large"
                        placeholder="Email Address"
                        status={meta.touched && meta.error ? "error" : undefined}
                        disabled
                        {...field}
                      />
                    </label>
                    <InputErrorComponent name={field.name}/>
                  </div>
                )}
              </Field>

              <div>
                <Button
                  type="primary"
                  size="large"
                  className="px-10"
                  loading={isSubmitting}
                  disabled={!isValid}
                  onClick={() => handleSubmit()}>
                  Save
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default EditProfilePage;
