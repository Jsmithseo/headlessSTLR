import React from "react";

const YouTubeEmbed = ({ embedId, title, className = "" }) => {
  return (
    <div className={`relative w-full pt-[56.25%] ${className}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={title || "YouTube video player"}
      />
    </div>
  );
};

export default YouTubeEmbed;
