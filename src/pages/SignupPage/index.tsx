import React from 'react';
import {Button, Card, Input, message} from "antd";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import {Link} from "react-router-dom";
import Container from "../../components/Container";
import {ISignupRequest} from "../../types/auth.types";
import authService from "../../services/auth.service";
import InputErrorComponent from "../../components/InputErrorComponent";

interface IProps {
}

function SignupPage(props: IProps) {
  const validationSchema = yup.object().shape({
    firstName: yup.string().required("Required").nullable(),
    lastName: yup.string().required("Required").nullable(),
    email: yup.string().email("Invalid email format").required("Required").nullable(),
    password: yup.string().required("Required").nullable(),
    username: yup.string()
      .matches(/^[a-zA-Z0-9_]{6,20}$/, `Username can only contain letters, numbers of 6 - 20 characters`)
      .required("Required")
      .nullable(),
  });

  const initialValue: ISignupRequest = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
  }

  const onSubmit = (value: ISignupRequest, helpers: FormikHelpers<ISignupRequest>) => {
    authService.signup(value).catch((err) => {
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
      <Card className="max-w-sm mx-auto drop-shadow-lg p-4 mt-10">
        <div>
          <h3 className="text-center">Get Started</h3>
          <p className="text-center">Create a free account to create and share playlists to your
            loved ones</p>

          <div className="mt-10 max-w-sm mx-auto">
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

                  <Field name="email">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">Email</span>
                          <Input
                            type="email"
                            size="large"
                            placeholder="Email Address"
                            status={meta.touched && meta.error ? "error" : undefined}
                            {...field}
                          />
                        </label>
                        <InputErrorComponent name={field.name}/>
                      </div>
                    )}
                  </Field>

                  <Field name="password">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">Password</span>
                          <Input.Password
                            size="large"
                            placeholder="Password"
                            autoComplete="new-password"
                            status={meta.touched && meta.error ? "error" : undefined}
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
                      className="w-full"
                      loading={isSubmitting}
                      disabled={!isValid}
                      onClick={() => handleSubmit()}>
                      Sign up
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <p className="mt-5 text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Login</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default SignupPage;
