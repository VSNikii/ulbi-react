import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { IUser } from '../types/types.tsx';
import { List } from './List.tsx';
import { UserItem } from './UserItem.tsx';
import { useNavigate } from 'react-router';

export const UsersPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <>
      <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} onClick={(user) => {navigate(`/users/${user.id}`)}}/>} />
    </>
  );
};
