import React from "react";

const JourneyPath = ({ totalBlocks }) => {
  const pathHeight = totalBlocks * 150;

  return (
    <div
      className="relative w-32 flex justify-center"
      style={{ height: `${pathHeight}px` }}
    >
      <div className="absolute inset-0 flex justify-center">
        <div className="w-24 bg-gray-800 rounded-full relative overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-0.5 h-full bg-white/30 border-l-2 border-r-2 border-dashed border-white/50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyPath;
