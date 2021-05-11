export type User = {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export type UserContextType = {
  selectedUserContext: User;
  setUserContext: (state: User) => void;
  logoutUser: () => void;
};
