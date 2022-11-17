import React from "react";

import { GlobalStyle } from "./GlobalStyle";
// Navbar
import Navbar from "./Components/Navbar";

// SectionComponent
import Section from "./Components/Section";
// Sections
import Title from "./Sections/Title";
import Data from "./Sections/Data";

type Props = {};

function App({}: Props) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Section component={<Title />} />
      <Section component={<Data />} />
    </>
  );
}

export default App;
