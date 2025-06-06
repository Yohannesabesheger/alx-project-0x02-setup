import Head from 'next/head';
import Header  from '../components/layout/Header';

const Home:React.FC = () => {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
      </Head>
      <Header />
      <main className="flex min-h-screen items-center justify-center bg-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to ALX Project 2 Homepage</h2>
      </main>
    </>
  );
}
export default Home;
