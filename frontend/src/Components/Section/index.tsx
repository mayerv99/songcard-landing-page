import React from "react";

import { Wrapper } from "./styled";

type Props = {
  component: React.ReactNode;
};

function Section({ component }: Props) {
  return <Wrapper>{component}</Wrapper>;
}

export default Section;
