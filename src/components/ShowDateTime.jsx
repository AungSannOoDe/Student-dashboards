import React from "react";

const ShowDateTime = ({
  timestamp,
  className = "",
  hideDate = false,
  hideTime = false,
}) => {
  const date = new Date(timestamp);

  const currentDate = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const currentTime = date.toLocaleTimeString("en-GB", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className={className} title={currentDate + " | " + currentTime}>
      <p className={`text-nowrap ${hideDate ? "hidden" : ""} `}>
        {currentDate}
      </p>
      <p className={`text-nowrap ${hideTime ? "hidden" : ""} `}>
        {currentTime}
      </p>
    </div>
  );
};

export default ShowDateTime;