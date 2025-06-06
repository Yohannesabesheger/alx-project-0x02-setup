import Head from 'next/head';
import { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps,type PostsPageProps } from '@/interfaces';

export default function PostsPage({ posts }: PostsPageProps) {
    return (
      <>
        <Head>
          <title>Posts</title>
        </Head>
        <Header />
        <main className="p-8 space-y-4">
          <h1 className="text-3xl font-bold mb-6">Posts</h1>
          {posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </main>
      </>
    );
  }
  
  export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
    const data = await res.json();
  
    const posts: PostProps[] = data.map((post: any) => ({
      title: post.title,
      content: post.body,
      userId: post.userId,
    }));
  
    return {
      props: {
        posts,
      },
    };
  }