import React, { useState } from "react";

const ValidEmail = () => {
  const [email, updateEmail] = useState("");

  const handleEmailChange = (e) => updateEmail(e);
  // const checkEmail = () => {}


  return (
    <div className="card">
      <form>
        <input
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => handleEmailChange(e.target.value)}
        />
      </form>
      <button>Validate</button>
    </div>
  );
};

export default ValidEmail;
