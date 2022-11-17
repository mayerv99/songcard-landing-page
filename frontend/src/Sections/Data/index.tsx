import React from "react";
import { Wrapper, ItemsWrapper, Item, Number } from "./styled";

type Props = {};

function Data({}: Props) {
  const showData = [
    { number: "+14 milhões", label: "letras" },
    { number: "50", label: "idiomas" },
    { number: "+14 milhões", label: "letras" },
    { number: "+14 milhões", label: "letras" },
  ];

  return (
    <Wrapper>
      <h1>O que oferecemos</h1>
      <ItemsWrapper>
        {showData.map((item, index) => (
          <Item key={index}>
            <Number>{item.number}</Number>
            <span>{item.label}</span>
          </Item>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
}

export default Data;
