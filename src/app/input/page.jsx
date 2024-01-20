import React from "react";

const MyInput = () => {
  return (
    <div>
      <div className="m-8 p-4 relative">
        <label htmlFor="myInput" className="input-label focus:text-red-500 ">
          Label
        </label>
        <input id="myInput" type="text" placeholder="" className="border-b-2" />
      </div>
    </div>
  );
};

export default MyInput;
