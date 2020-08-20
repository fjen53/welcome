import React from "react";
import nottherightpage from "./image/Error404.png";
import "./css/Error404.css";

class Error404 extends React.Component {
  render() {
    return (
      <div className="Error404">
        <img src={nottherightpage} alt="not the right page!" />
        Error! not the right page
      </div>
    );
  }
}

export default Error404;
