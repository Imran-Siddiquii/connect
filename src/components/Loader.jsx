import React from "react";
import "../App.css";
import { ThreeCircles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="App-header">
      <ThreeCircles
        height="100"
        width="100"
        color="#1B7BDB"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor=""
        innerCircleColor=""
        middleCircleColor=""
      />
      <span>Loading....</span>
    </div>
  );
};

export default Loader;
