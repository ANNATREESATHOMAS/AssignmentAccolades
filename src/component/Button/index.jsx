import React from "react";
const Button = (props) => {
  return (
    <>
      <button className="btn" type="submit">{props.button}</button>
    </>
  );
};
export default Button;
