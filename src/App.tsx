import "./App.css";
import UserList from "@/components/customHooks/userLIst/UserList";
import { Button } from "./components/ui/button";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { useState } from "react";
import NewUserForm from "./components/newUser/NewUserForm";
import User from "./components/customHooks/user/User";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  const deleteUser = (id: string) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };
  function isKeyboardEvent(
    event: React.MouseEvent | React.KeyboardEvent
  ): event is React.KeyboardEvent {
    return (event as React.KeyboardEvent).key !== undefined;
  }

  const closeModal = (e: React.MouseEvent | React.KeyboardEvent) => {
    const target = e.target as HTMLElement;
    if (target.className === "overlay") setShowModal(false);
    else if (isKeyboardEvent(e) && e.key === "Escape") setShowModal(false);
  };

  const addUser = (user: User) => {
    setUsers((prev: User[]) => {
      return [...prev, user];
    });
    setShowModal(false);
  };
  return (
    <div className="App" onClick={closeModal} onKeyDown={closeModal}>
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h1>No Users</h1>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <Button className="create-user" onClick={() => setShowModal(true)}>
        Create User
      </Button>
      <Footer />
    </div>
  );
}

export default App;
