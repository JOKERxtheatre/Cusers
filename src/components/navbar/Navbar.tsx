import "@/styles/Navbar.css";
import { ModeToggle } from "../provider/mode-toggle";

interface NavbarProps {
  usersLength: number;
}

function Navbar({ usersLength }: NavbarProps) {
  return (
    <div className="navbar bg-background fixed">
      <div className="navbar-container container">
        <h1 className="navbar-logo">Cuser</h1>
        <div className="smth flex gap-5 items-center justify-center">
          <h3 className="navbar-counter">
            {usersLength > 0 ? "You have: " + usersLength : "No Users :("}
          </h3>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
