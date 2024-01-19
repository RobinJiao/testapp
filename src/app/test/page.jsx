"use client";
import React from "react";

const TestInput = () => {
  const [focus, setFocus] = React.useState(false);
  const inActiveLabel = "block text-sm text-gray-600";
  const activeLabel = "block text-sm text-gray-600 translate-y-3.5 scale-75";
  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };
  return (
    <div className="w-1/2 p-2">
      TestInput Page Form 1
      <form>
        <div className="form-input">
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
      Form 2
      <form action="">
        <div>
          <input
            type="text"
            className="block w-full p-2 pl-4 text-gray-700 focus:border-b-2 "
          />
        </div>
      </form>
    </div>
  );
};

export default TestInput;
