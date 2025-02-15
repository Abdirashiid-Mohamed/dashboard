import React, { useState } from 'react';

const MembersForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [membershipDate, setMembershipDate] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, membershipDate };
    // Halkan xogta waxaa lagu kaydin karaa server haddii loo baahdo, hadda waxaa lagu kaydinayaa state-ka
    setSubmittedData(data);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Members Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Member Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Geli magaca xubinta"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            placeholder="Geli email-ka"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Membership Date</label>
          <input
            type="date"
            value={membershipDate}
            onChange={(e) => setMembershipDate(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="mt-4 py-2 px-4 bg-green-600 text-white rounded-md">
          Submit
        </button>
      </form>

      {submittedData && (
        <div className="mt-6 p-4 border border-green-300 rounded-md bg-green-50">
          <h3 className="text-xl font-semibold">Xogta la Keydiyey:</h3>
          <p><strong>Magaca:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p>
            <strong>Taariikhda Xubinnimada:</strong> {submittedData.membershipDate}
          </p>
        </div>
      )}
    </div>
  );
};

export default MembersForm;