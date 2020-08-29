import React from "react";

function Display(props) {
  return (
    <div>
      <div className="Display">
        <h5>{props.data}</h5>
      </div>

      <h5>{props.formData}</h5>
    </div>
  );
}
export default Display;
