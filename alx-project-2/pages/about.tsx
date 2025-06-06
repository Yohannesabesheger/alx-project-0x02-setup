import Head from 'next/head';
import Header from '../components/layout/Header';

const   AboutPage:React.FC=()=> {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700">About Us</h1>
      </main>
    </>
  );
};
export default AboutPage;