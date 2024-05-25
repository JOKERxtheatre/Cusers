import { Button } from "@/components/ui/button";
import "@/styles/UserList.css";
import User from "../user/User";

interface UserListProps {
  users: User[];
  deleteUser: (id: string) => void;
}

function UserList({ users, deleteUser }: UserListProps) {
  return (
    <div className="userList pb-20">
      <div className="userList-container container">
        {users.map((user) => {
          return (
            <div className="card" key={user.id}>
              <div className="card-inner items-center justify-center flex flex-col">
                <img
                  src={user.imageUrl}
                  alt="imgageUrl"
                  height={150}
                  width={150}
                />
                <h3 className="py-1">
                  {user.firstName} {user.lastName}
                </h3>
                <p>Age : {user.age}</p>
                <p>From: {user.from}</p>
                <p>Job: {user.job}</p>
                <p>
                  Gender:{" "}
                  <span
                    className="p-1 rounded-lg"
                    style={{
                      backgroundColor:
                        user.gender === "Male" ? "#4545ff" : "#ff3d3d",
                    }}
                  >
                    {user.gender}
                  </span>
                </p>
                <Button onClick={() => deleteUser(user.id)} className="mt-2">
                  Delete
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
