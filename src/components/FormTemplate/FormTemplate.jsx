import React, { useState } from "react";
import * as S from "./FormTemplate.style";
import { Input } from "../../components";

function Form({ fields, callback, headline, children }) {
  const [fieldValues, setFieldValues] = useState();

  return (
    <S.Form
      onSubmit={(e) => {
        e.preventDefault();
        callback(fieldValues);
      }}
    >
      <h1>{headline}</h1>

      {fields &&
        fields.map((field) => (
          <Input
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            handleChange={(e) => {
              setFieldValues({ ...fieldValues, [field.name]: e.target.value });
            }}
          />
        ))}
      <div>{children}</div>
    </S.Form>
  );
}

export default Form;
