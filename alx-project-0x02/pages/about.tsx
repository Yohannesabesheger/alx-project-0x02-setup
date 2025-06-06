import Head from 'next/head';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <div className="flex gap-4 flex-wrap">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </main>
    </>
  );
}
