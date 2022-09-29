import React from "react";

function Skills(props) {
  let lis = props.items.map((el) => {
    return <li>{el}</li>;
  });
  let div = React.createElement("div", null, lis);
  return div;
}
export { Skills };
