import { useState } from "react";

const FormObject = () => {
  const [formValues, setFromValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleFormValues = (e) => {
    setFromValues({
      ...formValues,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    const { username, password, email } = formValues;
    alert(`username:${username} \n email:${email} \n password:${password}
  `);
  };
  return (
    <div>
      <form style={{ margin: "15rem" }} onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username: <span className="text-danger">{formValues.username}</span>
          </label>
          <input
            onChange={handleFormValues}
            type="text"
            className="form-control"
            value={formValues.username}
            id="username"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address:{" "}
            <span className="text-danger">{formValues.email}</span>
          </label>
          <input
            onChange={handleFormValues}
            type="email"
            className="form-control"
            value={formValues.email}
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
            value={formValues.password}
            onChange={handleFormValues}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormObject;
