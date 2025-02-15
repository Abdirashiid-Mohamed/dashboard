import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import BooksForm from './components/BooksForm';
import MembersForm from './components/MembersForm';
import BorrowReturnForm from './components/BorrowReturnForm';
import LibrariansForm from './components/LibrariansForm';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route path="books" element={<BooksForm />} />
          <Route path="members" element={<MembersForm />} />
          <Route path="borrow-return" element={<BorrowReturnForm />} />
          <Route path="librarians" element={<LibrariansForm />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;