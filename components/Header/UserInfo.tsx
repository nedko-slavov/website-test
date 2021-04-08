import { FC } from 'react';
import PropTypes from 'prop-types';

interface UserInfoProps {
  name: string;
}

const UserInfo: FC<UserInfoProps> = ({ name }) => (
  <div className="user-info">
    <span className="label">name:</span>
    {name}
  </div>
);

UserInfo.propTypes = {
  name: PropTypes.string.isRequired,
};

export default UserInfo;
