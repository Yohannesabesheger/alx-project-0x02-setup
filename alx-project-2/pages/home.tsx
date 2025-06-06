import Head from 'next/head';
import Header from '../components/layout/Header';

const   HomePage:React.FC = () =>{
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <Header />
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-700">Welcome to the Home Page</h1>
      </main>
    </>
  );
}

export default HomePage;
