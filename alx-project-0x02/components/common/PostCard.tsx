import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border border-gray-300 p-4 rounded-lg shadow-sm bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{content}</p>
      <span className="text-sm text-gray-500">Posted by user #{userId}</span>
    </div>
  );
};

export default PostCard;
