import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';

const iniState = {
  id: '',
  name: '',
  username: '',
  email: '',
  phone: '',
  website: '',
};

export const UserContext = createContext({
  selectedUserContext: iniState,
  setUserContext: (state: typeof iniState) => {
    console.log(state);
  },
});

type IniState = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

const setUserToLocalStarage = (setUserContext: (value: IniState) => void): void => {
  const user = localStorage.getItem('selectedUserContext');
  if (user !== null) {
    const { id, name, username, email, phone, website } = JSON.parse(user);

    setUserContext({
      id: id,
      name: name,
      username: username,
      email: email,
      phone: phone,
      website: website,
    });
  }
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [selectedUserContext, setUserContext] = useState<IniState>(iniState);

  useEffect(() => {
    // setUserContext({});
    setUserToLocalStarage(setUserContext);
  }, [selectedUserContext.id, setUserContext]);

  if (!(selectedUserContext.id === '')) {
    localStorage.setItem('selectedUserContext', JSON.stringify(selectedUserContext));
  }

  return (
    <UserContext.Provider value={{ selectedUserContext, setUserContext }}>
      {props.children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
