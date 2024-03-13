async function IframeVideoComponent() {
  const src = await getSrc();
  return (
    <div className="z-[2] flex items-center justify-center w-[90%] xl:w-[40%] h-fit">
      <iframe
        width="760"
        height="515"
        src={src}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="rounded-2xl shadow-2xl"
      ></iframe>
    </div>
  );
}

export default IframeVideoComponent;

function getSrc() {
  return "https://www.youtube.com/embed/rOlnU5Oeq7w?si=wY6Z_appCAYfZaOa";
}
