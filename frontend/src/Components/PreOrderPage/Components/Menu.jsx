/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Formik, Form, Field } from "formik";

function Menu(props) {
  const { pre_order_details } = props;

  return (
    <div className="shadow shadow-100 rounded p-3 mb-4 mt-2">
        <div className="row">
          <div className="col-lg-12">
            <Formik initialValues={{ email: "", password: "" }}>
              {(props) => (
                <div>
                  {console.log(props)}
                  <div className="row mb-5">
                    <div className="col-lg-12 text-center">
                      <h1 className="mt-5">Login Form</h1>
                    </div>
                  </div>
                  <Form>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <Field
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        autoComplete="off"
                      />
                    </div>
  
                    <div className="form-group">
                      <label htmlFor="password" className="mt-3">
                        Password
                      </label>
                      <Field
                        type="password"
                        name="password"
                        placeholder="Enter password"
                      />
                    </div>
  
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mt-4"
                    >
                      Submit
                    </button>
                  </Form>
                </div>
              )}
            </Formik>
          </div>
        </div>
      </div>
  );
}

export default Menu;
