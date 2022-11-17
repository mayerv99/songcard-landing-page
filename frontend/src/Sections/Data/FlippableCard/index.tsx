import React, { useState } from "react";

import { Wrapper, CardInner, FrontCard, BackCard } from "./styled";

type Props = {};

function FlippableCard({}: Props) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <Wrapper onClick={() => setIsFlipped(!isFlipped)}>
      <CardInner className={isFlipped ? "flipped" : ""}>
        <FrontCard>FRENTE</FrontCard>
        <BackCard>ATRÁS</BackCard>
      </CardInner>
    </Wrapper>
  );
}

export default FlippableCard;
