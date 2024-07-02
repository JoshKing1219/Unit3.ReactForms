import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleClick = async () => {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      console.log(json);
      setSuccess(json.message);
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div id="authentication">
      <h2>Authentication</h2>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </div>
  );
}
