import { FC, FormEventHandler } from 'react';
import PropTypes from 'prop-types';
import { Column, Row } from '../../ui/grid';
import { Button, Form, InputText } from '../../ui';
import { UseFormRegister, DeepMap, FieldError } from 'react-hook-form';
import { IFormValues } from '../../../types';

type UserFormTypes = {
  submitButonLabel: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<IFormValues>;
  errors?: DeepMap<IFormValues, FieldError>;
};

const UserForm: FC<UserFormTypes> = ({ submitButonLabel, register, onSubmit, errors }) => {
  return (
    <Row>
      <Column colWidth="4">
        <Form onSubmit={onSubmit}>
          <InputText
            type="text"
            name="name"
            label="name"
            register={register}
            required
            errors={errors}
          />

          <InputText
            type="text"
            name="username"
            label="user name"
            register={register}
            required
            errors={errors}
          />

          <InputText
            type="text"
            name="email"
            label="email"
            register={register}
            required
            errors={errors}
          />

          <InputText
            type="text"
            name="phone"
            label="phone"
            register={register}
            required
            errors={errors}
          />

          <InputText
            type="text"
            name="website"
            label="website"
            register={register}
            required
            errors={errors}
          />

          <Button type="submit" kind="primary">
            {submitButonLabel}
          </Button>
        </Form>
      </Column>
    </Row>
  );
};

UserForm.propTypes = {
  submitButonLabel: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  register: PropTypes.any.isRequired,
  errors: PropTypes.any.isRequired,
};

export default UserForm;
