import React from 'react';
import {Button, Card, Input} from "antd";
import {Field, FieldProps, Form, Formik} from "formik";
import {Link} from "react-router-dom";
import Container from "../../components/Container";

interface IProps {
}

function SignupPage(props: IProps) {
  return (
    <Container>
      <Card className="max-w-sm mx-auto drop-shadow-lg p-4 mt-10">
        <div>
          <h3 className="text-center">Get Started</h3>
          <p className="text-center">Create a free account to create and share playlists to your
            loved ones</p>

          <div className="mt-10 max-w-sm mx-auto">
            <Formik initialValues={{}} onSubmit={() => {
            }}>
              {() => (
                <Form className="flex flex-col gap-5">
                  <Field name="firstName">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">First Name</span>
                          <Input type="text" size="large" placeholder="First Name" {...field}/>
                        </label>
                      </div>
                    )}
                  </Field>

                  <Field name="lastName">
                    {({field, meta}: FieldProps) => (
                      <div>
                        <label>
                          <span className="flex">Last Name</span>
                          <Input type="text" size="large" placeholder="Last Name" {...field}/>
                        </label>
                      </div>
                    )}
                  </Field>

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
                          <Input.Password size="large" placeholder="Password" autoComplete="new-password" {...field}/>
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
            Already have an account?{" "}
            <Link to="/login" className="text-primary hover:underline">Login</Link>
          </p>
        </div>
      </Card>
    </Container>
  );
}

export default SignupPage;
