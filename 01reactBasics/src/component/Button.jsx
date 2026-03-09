import React, { useEffect } from "react";

const Button = ({ onClick }) => {
  // Simulate some work whenever the child renders
  useEffect(() => {
    console.log("Child did some work in useEffect");
  });

  console.log("Child rendered");

  return <button onClick={onClick}>Child Button</button>;
};

export default Button;