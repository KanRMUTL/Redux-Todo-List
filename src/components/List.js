import React from "react";
import ListItems from "./ListItems";

const List = props => (
  <div
    style={{
      padding: 2,
      height: 400,
      overflow: "scroll",
      overflowX: "hidden"
    }}
  >
    <ListItems
      todos={props.todos}
      handleCheckboxCheck={props.handleCheckboxCheck}
    />
  </div>
);

export default List;
