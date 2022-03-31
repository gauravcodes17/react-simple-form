import React, { useState } from "react";
import "./Form.css";
import UserRecords from "./UserRecords";

const Form = () => {
  const [details, setDetails] = useState({
    username: "",
    email: "",
    phone: "",
    age: "",
    country: "",
  })
  const [records, setRecords] = useState([]);

  const changeInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);

    setDetails({
      ...details,
      [name]: value,
    });
  }

  const submitFormData = (e) => {
    e.preventDefault();
    if (
      details.username &&
      details.email &&
      details.phone &&
      details.age &&
      details.country
    ) {
      setRecords([...records, details]);
      setDetails({
        username: "",
        email: "",
        phone: "",
        age: "",
        country: "",
      });
      console.log(records);
      alert("Registration Successful");
    } else {
      alert("All Fields are required");
    }
  }

  return (
    <>
      <div className="form-wrapper">
        <h1>Registration Form</h1>
        <form action="" onSubmit={submitFormData}>
          <div>
            <label htmlFor="username">Your FullName*</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="username"
              id="username"
              onChange={changeInput}
              value={details.username}
            />
          </div>
          <div>
            <label htmlFor="email">Your Email*</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="email"
              id="email"
              onChange={changeInput}
              value={details.email}
            />
          </div>
          <div>
            <label htmlFor="phone">Mobile Number*</label>
            <br />
            <input
              type="number"
              autoComplete="off"
              name="phone"
              id="phone"
              onChange={changeInput}
              value={details.phone}
            />
          </div>
          <div>
            <label htmlFor="age">Age*</label>
            <br />
            <input
              type="number"
              autoComplete="off"
              name="age"
              id="age"
              onChange={changeInput}
              value={details.age}
            />
          </div>
          <div>
            <label htmlFor="country">Country*</label>
            <br />
            <input
              type="text"
              autoComplete="off"
              name="country"
              id="country"
              onChange={changeInput}
              value={details.country}
            />
          </div>
          <div>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
      <UserRecords records={records} />
    </>
  );
}

export default Form;
