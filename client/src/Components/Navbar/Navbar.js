import React, { useState } from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { logout } = useAuth();

  const navigate = useNavigate();

  async function handleLogout() {
    setError("");
    setLoading(true);

    try {
      await logout();
      navigate("/login", { replace: true });
    } catch (err) {
      setError("Failed to log out.");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <div
      className="navbar"
    >
      <Nav>
        <NavMenu>
          <NavLink to="/todos">Todo List</NavLink>
          <span>|</span>
          <NavLink to="/create">Create Todo</NavLink>
          <span>|</span>
          <button
            className="logout-btn"
            style={{
              fontSize: "1rem",
              padding: "5px",
              marginLeft: "1rem",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleLogout}
            disabled={loading}
          >
            Log out
          </button>
          {error && (
            <span
              style={{
                marginLeft: "1rem",
                padding: "1rem",
                boder: "none",
                boderRadius: "4px",
                backgroundColor: "rgb(255, 154, 154)",
                color: "rgb(160, 1, 1)",
              }}
            >
              {error}
            </span>
          )}
        </NavMenu>
      </Nav>
    </div>
  );
};
export default Navbar;
