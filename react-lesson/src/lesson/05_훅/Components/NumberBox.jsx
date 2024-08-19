import React, { useState, useEffect } from "react";

const NumberBox = ({ index }) => {
  const [number, setNumber] = useState(0);

  return <div>{number}번 박스입니다.</div>;
};

export default NumberBox;
