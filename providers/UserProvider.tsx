import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';
import PropTypes from 'prop-types';
import { initialUserValues } from '../defaults/initialUserValues';
import { User, UserContextType } from '../types';

export const UserContext = createContext<UserContextType>({
  selectedUserContext: initialUserValues,
  setUserContext: (state: User) => {
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

const SELECTED_USER_CONTEXT = 'selectedUserContext';

const loadUserFromLocalStorage = (setUserContext: (value: User) => void): void => {
  const user = localStorage.getItem(SELECTED_USER_CONTEXT);
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
    loadUserFromLocalStorage(setUserContext);
  }, [selectedUserContext.id, setUserContext]);

  if (selectedUserContext.id) {
    localStorage.setItem(SELECTED_USER_CONTEXT, JSON.stringify(selectedUserContext));
  }

  const userContext = useMemo(
    () => ({
      selectedUserContext,
      setUserContext,
    }),
    [selectedUserContext]
  );

  return <UserContext.Provider value={userContext}>{props.children}</UserContext.Provider>;
};

export const useUserContext = (): UserContextType => useContext(UserContext);

UserProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
