import React, { useState, useEffect } from "react";
import User from '../assets/myimg.jpg'

const Header = () => {
  const [text, setText] = useState("Welcome to my website");

  useEffect(() => {
    const interval = setInterval(() => {
      if (text === "Welcome to my website, my name is Ladou") {
        setText("I am a software developer and technical writer");
      } else {
        setText("Welcome to my website, my name is Ladou");
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex justify-center gap-7 items-center px-3 py-5">
      <div className="w-[250px]">
        <img src={User} alt="profile picture" className="w-full" />
      </div>
      <div className="text-container">
        <h1 className="text-red-500 text-3xl">{text}</h1>
      </div>
    </div>
  );
};

export default Header;
