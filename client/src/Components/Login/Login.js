import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";
import "./Login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/", { replace: true });
    } catch (err) {
      setError("Failed to login.");
      console.error(err);
    }

    setLoading(false);
  }

  return (
    <>
      <div className="login-container">
        <h2>Log In</h2>
        {error && <h3 className="error-message">{error}</h3>}
        <form onSubmit={handleSubmit} className="login-form">
          <label>
            Email:{" "}
            <input
              type="email"
              ref={emailRef}
              id="email"
              placeholder="xxx@mail.com"
              required
            />
          </label>
          <label>
            Password:{" "}
            <input type="password" ref={passwordRef} id="password" required />
          </label>
          <input
            disabled={loading}
            type="submit"
            value="Log In"
            className="btn"
          />
        </form>
      </div>
    </>
  );
}
