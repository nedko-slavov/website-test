import React, { useState, createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { initialUserValues } from '../defaults/initialUserValues';
import { User } from '../types';

export const UserContext = createContext({
  selectedUserContext: initialUserValues,
  setUserContext: (state: typeof initialUserValues) => {
    console.log(state);
  },
});

const isWrongSymbolsIncluded = /\D+/g;

const formatPhone = (string: string): string => {
  if (string) {
    return string.replace(isWrongSymbolsIncluded, ' ');
  }

  return string;
};

const setUserToLocalStarage = (setUserContext: (value: User) => void): void => {
  const user = localStorage.getItem('selectedUserContext');
  if (user !== null) {
    const { id, name, username, email, phone, website } = JSON.parse(user);
    const formatedPhone = formatPhone(phone);
    const emailToLowerCase = email.toLowerCase();

    setUserContext({
      id,
      name,
      username,
      email: emailToLowerCase,
      phone: formatedPhone,
      website,
    });
  }
};

export const UserProvider: React.FC<{ children: React.ReactNode }> = (props) => {
  const [selectedUserContext, setUserContext] = useState<User>(initialUserValues);

  useEffect(() => {
    setUserToLocalStarage(setUserContext);
  }, [selectedUserContext.id, setUserContext]);

  if (selectedUserContext.id) {
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
