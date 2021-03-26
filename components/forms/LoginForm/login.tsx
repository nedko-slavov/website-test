import toLower from 'lodash/toLower';

interface UserType {
  id: string;
  name: string;
  email: string;
  phone: string;
  website: string;
}

const login = (email: string, users: UserType[], redirect: () => void): void => {
  const user = users.find((user: { email: string }) => toLower(user.email) === toLower(email));

  // redirect();
};

export default login;
