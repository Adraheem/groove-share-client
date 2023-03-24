import React from 'react';
import Container from "../../components/Container";
import {Button, Card, Input} from "antd";
import {Field, FieldProps, Form, Formik} from "formik";
import {Link} from "react-router-dom";

interface IProps {
}

function LoginPage(props: IProps) {
  return (
    <Container>
      <Card className="max-w-sm mx-auto drop-shadow-lg p-4 mt-10">
        <div>
          <h3 className="text-center">Welcome back</h3>
          <p className="text-center">Login to have access to your playlists</p>

          <div className="mt-10 max-w-sm mx-auto">
            <Formik initialValues={{}} onSubmit={() => {
            }}>
              {() => (
                <Form className="flex flex-col gap-5">
                  <Field name="email">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">Email</span>
                          <Input type="text" size="large" placeholder="Email Address" {...field}/>
                        </label>
                      </div>
                    )}
                  </Field>

                  <Field name="password">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">Password</span>
                          <Input.Password size="large" placeholder="Email Address" {...field}/>
                        </label>
                      </div>
                    )}
                  </Field>

                  <div>
                    <Button type="primary" size="large" className="w-full">Login</Button>
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
