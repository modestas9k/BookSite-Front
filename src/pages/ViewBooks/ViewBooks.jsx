import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Section, Button } from "../../components";
import { AuthContext } from "../../contexts/AuthContext";
import * as S from "./ViewBooks.style";

function ViewBooks() {
  const [books, setBooks] = useState([]);
  const Auth = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    fetch(`http://localhost:8080/books`, {
      headers: {
        Authorization: `Bearer ${Auth.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      })
      .catch((err) => console.log(err));
  }, [Auth, history]);
  if (!Auth) {
    history.push("/");
  }
  return (
    <Section>
      <S.H1>View Books</S.H1>
      <S.ViewCont>
        {books.length === 0 && (
          <S.Center>
            <h3>You have not added any books</h3>
            <Button
              color="primary"
              handleClick={() => history.push("/addBooks")}
            >
              Add Book
            </Button>
          </S.Center>
        )}
        {books.length > 0 && (
          <S.Columns>
            <S.Column>
              <strong>Author</strong>
            </S.Column>
            <S.Column>
              <strong>Title</strong>
            </S.Column>
          </S.Columns>
        )}

        {books.length > 0 &&
          books.map((book) => {
            return (
              <S.Columns key={book.id}>
                <S.Column>{book.author}</S.Column>
                <S.Column>{book.title}</S.Column>
              </S.Columns>
            );
          })}
      </S.ViewCont>
    </Section>
  );
}
export default ViewBooks;
