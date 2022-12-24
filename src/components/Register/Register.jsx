import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Register/registerstyle.css";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUsername] = useState("");
  const [country, setCountry] = useState("");
  const [mobNum, setMobNum] = useState("");
  const [userEmail, setuserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const [refId, setRefid] = useState("");

  const registerData = async (e) => {
    e.preventDefault();
    console.log(
      fullName,
      userName,
      country,
      mobNum,
      userEmail,
      userPass,
      refId
    );
    if (!fullName) {
      alert("Please update fullName");
    }
    if (!userName) {
      alert("Please update userName");
    }
    if (!country) {
      alert("Please update country");
    }
    if (!mobNum) {
      alert("Please update Mobile number");
    }
    if (!userEmail) {
      alert("Please update userEmail");
    }
    if (!userPass) {
      alert("Please update user Password");
    }

    const rawResponse = await fetch("https://lobster-app-ddwng.ondigitalocean.app/user/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api_key":"Z9Q7WKEY7ORGBUFGN3EG1QS5Y7FG8DU29GHKKSZH"
      },
      body: JSON.stringify({
        full_name: fullName,
        username: userName,
        referral_id:refId,
        email_id: userEmail,
        country_row_id: country,
        mobile_number: mobNum,
        password: userPass,
      }),
    });
    const content = await rawResponse.json();

    console.log(content);
  };

  return (
    <>
      <div className="Register-head">
        <h2>Register</h2>
        <p>Create your company account</p>
      </div>
      <div className="Register">
        <form onSubmit={registerData}>
          <Form.Control
            size="lg"
            type="text"
            placeholder=" Full Name*"
            className="Register-input mb-4"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="text"
            placeholder=" User name* "
            className="Register-input mb-4"
            value={userName}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="text"
            placeholder=" Select country*"
            className="Register-input mb-4"
            value={country}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="number"
            placeholder=" Mobile number*"
            className="Register-input mb-4"
            value={mobNum}
            onChange={(e) => {
              setMobNum(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="email"
            placeholder="  email*"
            className="Register-input mb-4"
            value={userEmail}
            onChange={(e) => {
              setuserEmail(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="password"
            placeholder=" password*"
            className="Register-input mb-4"
            value={userPass}
            onChange={(e) => {
              setUserPass(e.target.value);
            }}
          />

          <Form.Control
            size="lg"
            type="text"
            placeholder="  Referal ID"
            className="Register-input mb-4"
            value={refId}
            onChange={(e) => {
              setRefid(e.target.value);
            }}
          />

          <Button
            className="Register-btn mb-4"
            style={{ backgroundColor: "yellow", color: "blue" }}
            type="submit"
            onClick={registerData}
          >
            Register
          </Button>
        </form>
      </div>
    </>
  );
};

export default Register;
