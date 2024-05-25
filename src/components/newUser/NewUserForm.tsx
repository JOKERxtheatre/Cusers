import "@/styles/NewUserForm.css";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState, ChangeEvent, FormEvent } from "react";
import { v4 as uuidv4 } from "uuid";
import User from "../customHooks/user/User";

interface NewUserFormProps {
  addUser: (user: User) => void;
}

const NewUserForm: React.FC<NewUserFormProps> = ({ addUser }) => {
  const [user, setUser] = useState<User>({
    id: uuidv4(),
    imageUrl: "",
    firstName: "",
    lastName: "",
    age: null,
    from: "",
    job: "",
    gender: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    addUser(user);
    console.log(user);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev: User) => ({
      ...prev,
      [name]: name === "age" ? parseInt(value) : value,
      imageUrl: name === "imageUrl" ? value : prev.imageUrl, // Update imgUrl only if the input name is "imgUrl"
    }));
  };

  return (
    <div className="modal-warapper">
      <div className="overlay">
        <div className="modal bg-background">
          <span className=" absolute text-[9px] italic font-semibold pov bg-blue-950 rounded p-0.5">
            You can close modal with ESC
          </span>

          <h2>Create New User</h2>
          <form onSubmit={handleSubmit}>
            <label>
              <span>Image Url:</span>
              <Input
                type="url"
                className="w-[468px]"
                required
                name="imageUrl"
                onChange={(e) => handleChange(e)}
              />
            </label>
            <div className="grid grid-cols-2 gap-3">
              <label>
                <span>First Name:</span>
                <Input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, firstName: e.target.value };
                    });
                  }}
                />
              </label>
              <label>
                <span>Last Name:</span>
                <Input
                  type="text"
                  required
                  onChange={(e) => {
                    setUser((prev) => {
                      return { ...prev, lastName: e.target.value };
                    });
                  }}
                />
              </label>
            </div>
            <label>
              <span>Age:</span>
              <Input
                type="number"
                className="w-[468px]"
                required
                name="age"
                onChange={(e) => {
                  setUser((prev) => ({
                    ...prev,
                    age: parseInt(e.target.value), // Parse the value as a number
                  }));
                }}
              />
            </label>
            <label>
              <span>From:</span>
              <Input
                type="text"
                className="w-[468px]"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, from: e.target.value };
                  });
                }}
              />
            </label>
            <label>
              <span>Job:</span>
              <Input
                type="text"
                className="w-[468px]"
                required
                onChange={(e) => {
                  setUser((prev) => {
                    return { ...prev, job: e.target.value };
                  });
                }}
              />
            </label>
            <div className="gender flex-col items-start w-full">
              <span className="align-start">Gender:</span>
              <div className="flex gap-5">
                <label>
                  <small>Male</small>
                  <input
                    id="1"
                    className="inputs green"
                    type="radio"
                    required
                    name="gender"
                    value="Male"
                    onChange={(e) => {
                      setUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                  />
                </label>
                <label>
                  <small>Female</small>
                  <input
                    id="2"
                    className="inputs red"
                    type="radio"
                    required
                    name="gender"
                    value="Female"
                    onChange={(e) => {
                      setUser((prev) => {
                        return { ...prev, gender: e.target.value };
                      });
                    }}
                  />
                </label>
              </div>
            </div>
            <Button className="mt-2 ml-[197px] btn" type="submit">
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewUserForm;
