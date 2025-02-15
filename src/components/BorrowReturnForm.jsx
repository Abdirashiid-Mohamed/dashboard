import React, { useState } from 'react';

const BorrowReturnForm = () => {
  const [formData, setFormData] = useState({ bookId: '', memberId: '', action: 'borrow' });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Borrow/Return Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Book ID</label>
          <input
            type="text"
            name="bookId"
            value={formData.bookId}
            onChange={handleChange}
            placeholder="Enter book ID"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Member ID</label>
          <input
            type="text"
            name="memberId"
            value={formData.memberId}
            onChange={handleChange}
            placeholder="Enter member ID"
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Action</label>
          <select
            name="action"
            value={formData.action}
            onChange={handleChange}
            className="mt-1 p-2 w-full border rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          >
            <option value="borrow">Borrow</option>
            <option value="return">Return</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
        >
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 bg-blue-50 border border-blue-300 rounded">
          <h3 className="text-xl font-bold mb-2">Submitted Borrow/Return Data:</h3>
          <p><strong>Book ID:</strong> {submittedData.bookId}</p>
          <p><strong>Member ID:</strong> {submittedData.memberId}</p>
          <p><strong>Action:</strong> {submittedData.action}</p>
        </div>
      )}
    </div>
  );
};

export default BorrowReturnForm;