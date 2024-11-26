import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Fetch the message from the backend
    fetch("http://74.179.61.66:8080/api/message")
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching message:", error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20%" }}>
      <h1>Hi! My name is {message}</h1>
    </div>
  );
}

export default App;
