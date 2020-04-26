import React from "react";

const InputValue = ({ value, type, onChangeData }) => {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChangeData(type, e.target.value)}
    />
  );
};

export default InputValue;
