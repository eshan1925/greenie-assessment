import React, { useState } from "react";
const AccountCreationTabn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Dummy request handling, we can replace this with actual API calls
    console.log("Submitted:", { username, password });
    // we can use libraries like bcrypt to encrypt our password and send it to database.
    // we also need to check if our password satisfies all the conditions
    window.alert(
      "Successfully added new user to Database!!! with username-:" + username
    );
    setUsername("");
    setPassword("");
  };
  return (
    <div className="">
      <h2 className="text-3xl mb-4 text-center p-4 bg-blue-500 text-white">Account Creation</h2>
      <form onSubmit={handleFormSubmit} className="p-6 max-w-md">
        <label className="block text-lg mb-2">
          Username:
          <input
            type="text"
            className="form-input mt-1 block w-full border-2 border-sky-500 rounded"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label className="block text-lg mb-2">
          Password:
          <input
            type="password"
            className="form-input mt-1 block w-full border-2 border-sky-500 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default AccountCreationTabn;
