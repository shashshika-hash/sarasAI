import React from "react";

const JourneyCard = ({ block, side }) => {
  const isLeft = side == "left";

  return (
    <div
      className={`flex items-center ${
        isLeft ? "flex-row" : "flex-row-reverse"
      }`}
    >
      <div
        className={`flex-1 ${
          isLeft ? "flex justify-end" : "flex justify-start"
        }`}
      >
        <div
          className={`relative max-w-sm w-full ${
            block?.id == 1 || block?.id == 6 || block?.id == 9
              ? "bg-orange-50 border-orange-300"
              : "bg-gray-50 border-gray-200"
          } bg-gray-50 border-gray-200 border-2 rounded-lg p-6 shadow-sm`}
        >
          <div className={`absolute ${"left-1"} -top-6`}>
            <img
              src={`${
                block?.id == 1 || block?.id == 6 || block?.id == 9
                  ? "/assets/orangeFlag.svg"
                  : "/assets/purpleFlag.svg"
              }`}
              alt="flag"
              className={`w-12 h-12 `}
            />
          </div>

          <div
            className={`absolute ${
              isLeft ? "-right-24" : "-left-24"
            } top-1/2 flex items-center`}
          >
            <div
              className={`absolute w-6 h-6 rounded-full ${
                isLeft ? "-right-0" : "-left-0"
              } bg-gray-500 border-4 border-white shadow-md`}
            />
            <div className={`w-24 h-0.5 bg-gray-300`} />
          </div>

          <div className={`absolute -top-6 text-white text-sm font-bold`}>
            {block?.id}
          </div>

          <h3 className="text-gray-900 font-semibold text-base mb-4 leading-tight">
            {block?.title}
          </h3>

          <div className="flex gap-2">
            <p className="text-gray-700 font-semibold text-sm ">Skills:</p>
            <div className="flex flex-wrap gap-2">
              {block?.skills?.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyCard;
