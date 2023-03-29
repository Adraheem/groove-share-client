import React from 'react';
import Container from "../../components/Container";
import {Button, Card, Input, message} from "antd";
import {Field, FieldProps, Form, Formik, FormikHelpers} from "formik";
import * as yup from "yup";
import {Link} from "react-router-dom";
import {ILoginRequest} from "../../types/auth.types";
import authService from "../../services/auth.service";
import InputErrorComponent from "../../components/InputErrorComponent";

interface IProps {
}

function LoginPage(props: IProps) {
  const validationSchema = yup.object().shape({
    email: yup.string().email("Invalid email format").required("Required").nullable(),
    password: yup.string().required("Required").nullable(),
  });

  const initialValue: ILoginRequest = {
    email: "",
    password: "",
  }

  const onSubmit = (value: ILoginRequest, helpers: FormikHelpers<ILoginRequest>) => {
    authService.login(value).catch((err) => {
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
          <h3 className="text-center">Welcome back</h3>
          <p className="text-center">Login to have access to your playlists</p>

          <div className="mt-10 max-w-sm mx-auto">
            <Formik
              initialValues={initialValue}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              enableReinitialize>
              {({isSubmitting, isValid, handleSubmit}) => (
                <Form className="flex flex-col gap-5">
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
                      Login
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary hover:underline">Sign up</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default LoginPage;
