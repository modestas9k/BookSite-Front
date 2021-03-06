import React from "react";
import * as S from "./Input.style";

function Input({ label, name, handleChange, type }) {
  switch (type) {
    case "password":
      return (
        <S.InputBox>
          <S.Label htmlFor={name}>{label}</S.Label>
          <S.InputField
            onChange={handleChange}
            id={name}
            key={name}
            name={name}
            type="password"
            placeholder={`Enter your ${name}`}
            required
          />
        </S.InputBox>
      );
    default:
      return (
        <S.InputBox>
          <S.Label htmlFor={name}>{label}</S.Label>
          <S.InputField
            onChange={handleChange}
            id={name}
            name={name}
            type="text"
            key={name}
            required
          />
        </S.InputBox>
      );
  }
}

export default Input;
