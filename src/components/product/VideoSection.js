const VideoSection = ({ video }) => {
  const getYouTubeVideoId = (url) => {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=)|youtu\.be\/)([\w-]{11})(?:\S+)?$/;
    const match = url?.match(regex);

    if (match && match[1]) {
      return `https://www.youtube.com/embed/${match[1]}`;
    }

    return null;
  };

  return (
    <div className="bg-white rounded-lg w-[100%] xl:w-[70%] my-5">
      <iframe
        width="100%"
        height="400"
        src={getYouTubeVideoId(video)}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Innoloft"
      ></iframe>
    </div>
  );
};

export default VideoSection;
