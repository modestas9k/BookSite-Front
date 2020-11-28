import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Section, Form, Button } from "../../components";
import { AuthContext } from "../../contexts/AuthContext";

function Login() {
  const history = useHistory();
  const authTokenContext = useContext(AuthContext);

  function login(data, authTokenContext, history) {
    fetch("http://localhost:8080/login", {
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
        if (data.token) {
          console.log(authTokenContext.token);
          authTokenContext.setToken(data.token);
          history.push("/viewbooks");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Section>
      <Form
        headline="Login"
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
          login(data, authTokenContext, history);
        }}
      >
        <Button color="primary">Login</Button>
      </Form>
    </Section>
  );
}

export default Login;