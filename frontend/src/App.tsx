import React from "react";

import { GlobalStyle } from "./GlobalStyle";
// Navbar
import Navbar from "./Components/Navbar";

// SectionComponent
import Section from "./Components/Section";

// Sections
import Title from "./Sections/Title";
import Data from "./Sections/Data";
import Steps from "./Sections/Steps";

type Props = {};

function App({}: Props) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Section component={<Title />} />
      <Section component={<Data />} half={true} />
      <Section component={<Steps />} half={true} isLight={false} />
    </>
  );
}

export default App;
