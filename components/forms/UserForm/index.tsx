import { FC, MouseEvent, ChangeEvent, useReducer, useContext } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../../../graphql/mutations';
import { Column, Row } from '../../grid';
import { InputText } from '../../inputs';
import { UserContext } from '../../../providers/UserProvider';
import router from 'next/router';

const initialState = {
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

type ActionType = {
  type: 'HANDLE INPUT TEXT';
  payload: string;
  field: string;
};

type FormReducerType = {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const formReducer = (state: typeof initialState, action: ActionType): FormReducerType => {
  switch (action.type) {
    case 'HANDLE INPUT TEXT':
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

const UserForm: FC = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { setUserContext } = useContext(UserContext);
  const [addUser, { loading, error }] = useMutation(CREATE_USER, {
    onCompleted(user) {
      if (user) {
        setUserContext(user.createUser);
        router.push(`/user/${user.createUser.id}`);
      }
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>An error occurred</p>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    dispatch({
      type: 'HANDLE INPUT TEXT',
      field: e.target.name,
      payload: e.target.value,
    });
  };

  const handleSubmit = (e: MouseEvent<HTMLFormElement>): void => {
    e.preventDefault();
    addUser({
      variables: { input: state },
    });
  };

  const { name, username, email, phone, website } = state;

  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Column colWidth="4">
          <InputText
            value={name}
            name="name"
            label="name"
            id="name-input"
            onChange={handleChange}
          />

          <InputText
            value={username}
            name="username"
            label="username"
            id="name-input"
            onChange={handleChange}
          />

          <InputText
            value={email.toLowerCase()}
            name="email"
            label="email"
            id="name-input"
            onChange={handleChange}
          />

          <InputText
            value={phone}
            name="phone"
            label="phone"
            id="name-input"
            onChange={handleChange}
          />

          <InputText
            value={website}
            name="website"
            label="website"
            id="name-input"
            onChange={handleChange}
          />
        </Column>
      </Row>
      <button type="submit" className="btn-primary">
        Create
      </button>
    </form>
  );
};

export default UserForm;
