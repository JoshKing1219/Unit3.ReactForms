import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null)
    if (username === "") {
      setError("Username cannot be empty");
      return;
    }
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          body: JSON.stringify({ username, password }),
        }
      );
      const json = await response.json();
      setToken(json.token);
      console.log(json);
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <div id="form-container">
      <h2>Sign Up Form</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} id="sign-up-form">
        <label id="username">
          Username:{" "}
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
        <label id="password">
          Password:{" "}
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
        <button id="submit">Submit</button>
      </form>
    </div>
  );
}
