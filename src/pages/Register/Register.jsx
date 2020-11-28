import React from "react";
import { useHistory } from "react-router-dom";
import { Section, Form, Button } from "../../components";

function register(data, history) {
  fetch("http://localhost:8080/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg === "User has been registered successfully") {
        console.log(data.msg);
        history.push("/");
      }
    })
    .catch((err) => console.log(err));
}

function Register() {
  const history = useHistory();

  return (
    <Section>
      <Form
        headline="Registration"
        fields={[
          {
            name: "username",
            label: "Username",
          },
          {
            name: "password",
            label: "Password",
            type: "password",
          },
        ]}
        callback={(data) => {
          register(data, history);
        }}
      >
        <Button color="primary">Register</Button>
      </Form>
    </Section>
  );
}

export default Register;
