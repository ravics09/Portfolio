import React from "react";
const PreLoader = (props) => {
  // eslint-disable-next-line react/prop-types
  return <div id={props.load ? "preloader" : "preloader-none"}></div>;
};

export default PreLoader;
