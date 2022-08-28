import { useState } from "react";

const Form = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handleSubmit = (e) => {
    // e.preventDefault();
    alert(`username:${username} \n email:${email} \n password:${password}
  `);
    // setEmail('')
    // setUsername('')
    // setPassword('')
  };
  return (
    <div>
      <form style={{ margin: "15rem" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger">{username}</span>
          </label>
          <input
            onChange={handleUsername}
            type="text"
            className="form-control"
            value={username}
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address: <span className="text-danger">{email}</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
