import React from "react";

import { Wrapper, ListItem, Icon } from "./styled";

type Props = {
  itemsArray: String[];
};

function List({ itemsArray }: Props) {
  return (
    <Wrapper>
      {itemsArray?.map((item, index) => (
        <ListItem key={index}>
          <Icon>&#10003;</Icon> {item}
        </ListItem>
      ))}
    </Wrapper>
  );
}

export default List;
