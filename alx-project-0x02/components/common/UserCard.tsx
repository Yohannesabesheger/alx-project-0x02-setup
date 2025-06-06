import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white border rounded-lg shadow p-4">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600 text-sm">
        <strong>Address:</strong> {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
