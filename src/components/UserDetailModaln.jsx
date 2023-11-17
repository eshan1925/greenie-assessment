import React from 'react';

const UserDetailModaln = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-lg">
        <h3 className="text-2xl mb-4">User Details</h3>
        <p className="mb-2">Username: {user.username}</p>
        <p className="mb-2">Email: {user.email}</p>
        <p className="mb-2">Phone: {user.phone}</p>
        <p className="mb-2">ID: {user.id}</p>
        <p className="mb-2">Creation Date: {user.creationDate}</p>
        <button
          onClick={onClose}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default UserDetailModaln;
