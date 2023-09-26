import React from "react";

const SocialLinks = () => {
  return (
    <div className="px-4 py-6 flex justify-center items-center flex-col">
      <h2 className="uppercase mb-4 text-2xl">Connect with Me</h2>
      <ul className="flex gap-4">
        <li className="text-red-500 uppercase text-xl">
          <a href="https://github.com/Ebiladou" target="_blank">GitHub</a>
        </li>
        <li className="text-red-500 uppercase text-xl">
          <a href="https://ladou.hashnode.dev/" target="_blank">Hashnode</a>
        </li>
        <li className="text-red-500 uppercase text-xl">
          <a href="https://twitter.com/oyinebiladou" target="_blank">Twitter</a>
        </li>
      </ul>
    </div>
  );
};

export default SocialLinks;
