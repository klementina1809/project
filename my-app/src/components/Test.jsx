import React from "react";

// <p>Test</p>
// <span>Test</span>

function Test(props) {

  return props.type === "p" ? <p>Test</p> : <span>Test</span>;
}

export default Test;
