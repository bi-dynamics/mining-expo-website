"use client";
import { useState } from "react";

const IframeVideoComponent = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="z-[2] flex items-center justify-center w-[90%] xl:w-[40%] h-full">
      {showVideo ? (
        <iframe
          width="600"
          height="330"
          src="https://www.youtube.com/embed/rOlnU5Oeq7w?si=wY6Z_appCAYfZaOa"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-2xl"
        />
      ) : (
        // Video Thumbnail
        <div
          className="flex items-center justify-center relative bg-center bg-cover bg-no-repeat cursor-pointer bg-[url('https://img.youtube.com/vi/rOlnU5Oeq7w/maxresdefault.jpg')] w-[350px] h-[190px] md:w-[800px] md:h-[500px] lg:w-[600px] lg:h-[330px] group rounded-2xl shadow-2xl"
          onClick={() => setShowVideo(true)}
        >
          {/* Play Button */}
          <div className=" cursor-pointer relative h-16 w-24 rounded-md bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] group-hover:bg-[#FF0000] after:block after:absolute after:top-[20px] after:left-[40px] after:mx-auto after:border-dashed after:border-t-[12.5px] after:border-r-[0px] after:border-b-[12.5px] after:border-l-[20px] after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-[rgba(255, 255, 255, 1)]" />
        </div>
      )}
    </div>
  );
};

export default IframeVideoComponent;
