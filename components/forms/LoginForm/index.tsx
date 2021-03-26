// import React, { useState, useCallback, PropsWithChildren } from 'react';

// import Users from './users';
import { Formik, Form, Field, ErrorMessage, FormikErrors, FieldAttributes } from 'formik';

import PropTypes from 'prop-types';

// const Component: React.FC = (props): JSX.Element => {
//   return <div>{props.name}</div>;
// };

// Component.propTypes = {
//   name: PropTypes.string.isRequired,
// };

interface FormValues {
  email: string;
  password: string;
}

const LoginForm: React.FC = () => {
  return (
    <>
      <div>test</div>
      {/* <Component name="sdadas" />
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={(values) => {
          const errors: FormikErrors<FormValues> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className="btn-primary" type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik> */}
    </>
  );
};

export default LoginForm;
