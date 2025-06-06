import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-3xl font-bold mb-6">Users</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {users.map(user => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </main>
    </>
  );
}
