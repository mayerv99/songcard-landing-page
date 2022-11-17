import React from "react";
import { ItemsWrapper } from "../Data/styled";

import { Wrapper, Card, Arrow, CardBody } from "./styled";

type Props = {};

function Steps({}: Props) {
  const loremIpsum =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.";
  const steps = [
    { title: "Selecione a música", description: loremIpsum },
    { title: "Toque nas palavras que deseja", description: loremIpsum },
    {
      title: "Estude a sua música de forma personalizada",
      description: loremIpsum,
    },
  ];

  return (
    <Wrapper>
      <h1>Passos necessários</h1>
      <ItemsWrapper>
        {steps.map((item, index) => (
          <>
            <Card>
              <header id="carlos">
                <span>{index + 1}</span>
                {item.title}
              </header>
              <CardBody>{item.description}</CardBody>
            </Card>
            {index !== 2 && <Arrow>&#8594;</Arrow>}
          </>
        ))}
      </ItemsWrapper>
    </Wrapper>
  );
}

export default Steps;
