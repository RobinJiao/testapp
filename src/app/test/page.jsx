"use client";
import { useSession } from "next-auth/react";
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

  const session = useSession();
  console.log(session);
  return <div className="w-1/2 m-4">TestInput Page</div>;
};

export default TestInput;
