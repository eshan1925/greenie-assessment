import UserDetailsTabn from "./components/UserDetailsTabn";
import AccountCreationTabn from "./components/AccountCreationTabn";

function App() {
  return (
    <div className="bg-gray-200 h-screen">
      <h1 className="text-4xl text-center p-4 bg-blue-500 text-white">
        Dashboard
      </h1>
      <UserDetailsTabn />
      <AccountCreationTabn />
    </div>
  );
}

export default App;
