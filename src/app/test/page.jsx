"use client";
import React from "react";

const TestInput = () => {
  const [focus, setFocus] = React.useState(false);
  const inActiveLabel = "block text-sm text-gray-600 absolute ";
  const activeLabel = "block text-sm text-gray-600 translate-x-3.5 scale-75";
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <div className="w-1/2 m-4">
      TestInput Page
      <form className="my-4 pt-4">
        Form 1
        <div className="">
          <input
            id="my-input"
            type="text"
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="block w-full p-2 pl-4 text-gray-700 border-b-2 border-gray-300 focus:border-b-2 focus:border-green-500 focus:text-gray-900"
          />
          <label
            htmlFor="my-input"
            className={`${focus ? activeLabel : inActiveLabel}`}
          >
            My Input
          </label>
        </div>
      </form>
      <form action="" className="my-4  pt-4 relative ">
        Form 2
        <div>
          <label htmlFor="" className="absolute">
            Input is in the label
            <input
              type="text"
              className="block w-full p-2 pl-4 text-gray-700 border-b-2 focus:border-b-2 "
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default TestInput;
