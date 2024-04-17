import TodoIcon from "../../assests/todo.png";
import ProfileIcon from "../../assests/profile.png";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="flex">
      <div className="left-nav flex">
        <div className="bar">
          <img src={TodoIcon}  alt="" />
        </div>
        <div className="logo">TODO App</div>
      </div>
      <div className="profile flex">
        <img src={ProfileIcon} alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
