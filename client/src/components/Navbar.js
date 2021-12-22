import { NavLink, Outlet } from "react-router-dom";

const links = [
  { id: 1, title: "Home", to: "/" },
  { id: 2, title: "Signin", to: "/signin" },
  { id: 3, title: "Signup", to: "/signup" },
  { id: 4, title: "Users", to: "/users" },
];

const Navbar = () => {
  return (
    <header style={{ display: "flex", gap:15,flexDirection:"column" ,justifyItems:"center", width:"100vw" }}>
      <NavLink to="/">
        <h1 className="logo" style={{ textAlign:"center" }}>React+JWT</h1>
      </NavLink>
      <nav>
        <ul style={{ display: "flex", gap:15,justifyContent:"center" }}>
          {links.map((link) => (
            <NavLink key={link.id} to={link.to}>
              {link.title}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />
    </header>
  );
};
export default Navbar;
