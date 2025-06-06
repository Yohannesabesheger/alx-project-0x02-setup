import { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps,type UsersPageProps } from '@/interfaces';


export default function UsersPage({ users }: UsersPageProps) {
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
  
  // This runs at build time
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users: UserProps[] = await res.json();
  
    return {
      props: {
        users,
      },
    };
  }