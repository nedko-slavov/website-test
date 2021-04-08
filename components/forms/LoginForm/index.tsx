import React, { useState, useContext } from 'react';
import { useQuery } from '@apollo/client';
import { USERS } from '../../../graphql/queries';
import { UserContext } from '../../../providers/UserProvider';
import router from 'next/router';

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

const iniState = {
  id: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

const LoginForm: React.FC = () => {
  const [selectedUser, setUser] = useState(iniState);
  const { loading, error, data } = useQuery(USERS);
  const { setUserContext } = useContext(UserContext);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>`Error! ${error}`</p>;

  const users = data && data.users.data;

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setUserContext(selectedUser);
    router.push('/photos');
  };

  const handleUserChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const user = users.find((user: User) => user.id === e.target.value);
    setUser(user);
  };

  return (
    <form className="login" onSubmit={handleSubmit}>
      <div className="form-group">
        <select onChange={handleUserChange} value={selectedUser.id}>
          <option>Select user</option>
          {users.map((user: User) => (
            <option key={user.id} value={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-primary">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
