"use client";
import { useState } from "react";

const IframeVideoComponent = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="z-[2] flex items-center justify-center w-[90%] xl:w-[40%] h-[70vh]">
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCoMNamibia%2Fvideos%2F726220137075321&width=900&show_text=false&height=500&appId"
        width="600"
        height="330"
        allow="autoplay; web-share"
        allowFullScreen
        className=""
      />

      {/* {showVideo ? (
        <iframe
          width="600"
          height="330"
          src="https://www.youtube.com/embed/ZLyAqhop2FQ?si=rKvzTJgWojHKiztQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="rounded-2xl shadow-2xl"
        />
      ) : (
        
        <div
          className="flex items-center justify-center relative bg-center bg-cover bg-no-repeat cursor-pointer bg-[url('https://img.youtube.com/vi/ZLyAqhop2FQ/maxresdefault.jpg')] w-[350px] h-[190px] md:w-[800px] md:h-[500px] lg:w-[600px] lg:h-[330px] group rounded-2xl shadow-2xl"
          onClick={() => setShowVideo(true)}
        >
          
          <div className=" cursor-pointer relative h-16 w-24 rounded-md bg-[rgba(0,0,0,0.7)] hover:bg-[rgba(0,0,0,0.5)] group-hover:bg-[#FF0000] after:block after:absolute after:top-[20px] after:left-[40px] after:mx-auto after:border-dashed after:border-t-[12.5px] after:border-r-[0px] after:border-b-[12.5px] after:border-l-[20px] after:border-t-transparent after:border-r-transparent after:border-b-transparent after:border-l-[rgba(255, 255, 255, 1)]" />
        </div>
      )} */}
    </div>
  );
};

export default IframeVideoComponent;
