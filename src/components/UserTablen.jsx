import React from "react";
import UserDetailsModaln from "../components/UserDetailModaln";
import { dummyUserData } from "../utils/dummyData";

const UserTablen = () => {
  // State to manage modal visibility and selected user
  const [showModal, setShowModal] = React.useState(false);
  const [selectedUser, setSelectedUser] = React.useState(null);

  // Function to handle row click
  const handleRowClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border">
        <thead>
          <tr>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Phone</th>
            <th className="border p-2">ID</th>
            <th className="border p-2">Creation Date</th>
          </tr>
        </thead>
        <tbody>
          {dummyUserData.map((user) => (
            <tr
              key={user.id}
              onClick={() => handleRowClick(user)}
              className="cursor-pointer hover:bg-gray-100"
            >
              <td className="border p-2">{user.username}</td>
              <td className="border p-2">{user.email}</td>
              <td className="border p-2">{user.phone}</td>
              <td className="border p-2">{user.id}</td>
              <td className="border p-2">{user.creationDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <UserDetailsModaln
          user={selectedUser}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default UserTablen;
