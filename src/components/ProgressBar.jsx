import React from "react";

const ProgressBar = () => {
  return (
    <div className="w-full z-50 fixed top-0 left-0">
      <div className="h-1 w-full bg-gray-100 overflow-hidden">
        <div className="progress w-full h-full bg-blue-500 left-right" />
      </div>
    </div>
  );
};

export default ProgressBar;
