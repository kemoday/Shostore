import React from "react";

export const MainContaner = ({ children }) => {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      {children}
    </div>
  );
};
