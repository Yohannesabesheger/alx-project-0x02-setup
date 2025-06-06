import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <nav className="flex gap-6 text-lg font-medium">
        <Link href="/home" className="hover:text-gray-300">Home</Link>
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/posts" className="hover:text-gray-300">Posts</Link>
        <Link href="/users" className="hover:text-gray-300">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
