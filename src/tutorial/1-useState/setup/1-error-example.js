import React from "react";

var title = "Hello world!";

//Even though the variable value is changed but it did not reflect in UI
//That is because the component is not re rendered after value was changed, so we need state change
//State change in variable also re rerenders smartly(Virtual DOM)
const changeTitle = () => {
  title = "Hello Kitty!";
  console.log(`Title changed: ${title} but did it reflect?`);
};

const ErrorExample = () => {
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button className="btn" onClick={changeTitle}>
        Click to change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
