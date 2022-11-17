import React from "react";

import List from "./List";

import { Wrapper, TextWrapper, Picture } from "./styled";

type Props = {};

function Title({}: Props) {
  const listItems = ["Fácil", "Prático", "Interativo"];
  return (
    <Wrapper>
      <TextWrapper>
        <span>
          <h1>Uma nova forma de aprender idiomas.</h1>
          <h2>
            Um aplicativo para vc ouvir as suas músicas preferidas no idioma que
            quer falar! Você vai aprender a nova língua com exercícios
            interativos e divertidos, que usam a própria letra da música, e você
            mesmo escolhe as palavras que vai usar para aprender mais. Escute,
            brinque, faça exercícios e aprenda uma nova língua de forma
            divertida!
          </h2>
        </span>
        <List itemsArray={listItems} />
      </TextWrapper>
      <Picture />
    </Wrapper>
  );
}

export default Title;
