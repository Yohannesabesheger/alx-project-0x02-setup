import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState([
    { title: 'Getting Started', content: 'Learn how to build reusable components in Next.js with TypeScript and Tailwind.' },
    { title: 'About the Project', content: 'This project demonstrates basic routing, layout components, and prop-driven design.' },
    { title: 'Reusable UI', content: 'This card component is flexible and can be used anywhere in the app.' },
  ]);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-700">Welcome to the Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + New Post
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
