import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="p-6 space-y-4 bg-gradient-to-b from-indigo-600 to-blue-700 text-white h-full">
      <h2 className="text-2xl font-semibold">Library System</h2>
      <nav className="space-y-2">
        <Link
          to="/books"
          className="block px-4 py-2 rounded hover:bg-indigo-500 transition-colors"
        >
          Books
        </Link>
        <Link
          to="/members"
          className="block px-4 py-2 rounded hover:bg-indigo-500 transition-colors"
        >
          Members
        </Link>
        <Link
          to="/borrow-return"
          className="block px-4 py-2 rounded hover:bg-indigo-500 transition-colors"
        >
          Borrow/Return
        </Link>
        <Link
          to="/librarians"
          className="block px-4 py-2 rounded hover:bg-indigo-500 transition-colors"
        >
          Librarians
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;