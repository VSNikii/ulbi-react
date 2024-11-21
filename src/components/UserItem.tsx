import React, { FC } from 'react';
import { IUser } from '../types/types.tsx';

interface UserItemProps {
  user: IUser;
  onClick: (user: IUser) => void
}

export const UserItem: FC<UserItemProps> = ({ user, onClick }) => {
  return (
    <>
      <div style={{ padding: 15, border: '1px solid gray' }} onClick={() => {onClick(user)}}>
        {user.id} {user.name} проживает в городе {user.address.city} на улице {user.address.street}
      </div>
    </>
  );
};
