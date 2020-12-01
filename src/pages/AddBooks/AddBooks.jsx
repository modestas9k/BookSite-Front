import React, { useContext, useState } from "react";
import { Section, Form, Button } from "../../components";
import { AuthContext } from "../../contexts/AuthContext";

function AddBooks() {
  const authContext = useContext(AuthContext);
  const [message, setMessage] = useState();
  const [color, setColor] = useState();

  function addBook(data, Auth) {
    fetch("http://localhost:8080/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Auth.token}`,
      },
      body: JSON.stringify({
        author: data.author,
        title: data.title,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg === "Internal server error gathering book details") {
          setMessage(data.msg);
          setColor("red");
        } else {
          setMessage(data.msg);
          setColor("green");
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <Section>
      <Form
        headline="Add your favorite books"
        message={message}
        color={color}
        fields={[
          {
            name: "author",
            label: "Author",
          },
          {
            name: "title",
            label: "Title",
          },
        ]}
        callback={(data) => {
          addBook(data, authContext);
        }}
      >
        <Button color="primary">Add Book</Button>
      </Form>
    </Section>
  );
}
export default AddBooks;
