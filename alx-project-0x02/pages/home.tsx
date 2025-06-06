import Head from 'next/head';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold text-center text-gray-700 mb-8">
          Welcome to the Home Page
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="Getting Started" content="Learn how to build reusable components in Next.js with TypeScript and Tailwind." />
          <Card title="About the Project" content="This project demonstrates basic routing, layout components, and prop-driven design." />
          <Card title="Reusable UI" content="This card component is flexible and can be used anywhere in the app." />
        </div>
      </main>
    </>
  );
}
