import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";

export const VideosCarousel = (props) => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/ZH2aYafTRtc?enablejsapi=1",
      index: 0,
    },
    {
      url: "https://www.youtube.com/embed/AWXHjbQ9n18?enablejsapi=1",
      index: 1,
    },
    {
      url: "https://www.youtube.com/embed/aK1kzA2A8hI?enablejsapi=1",
      index: 2,
    },
    {
      url: "https://www.youtube.com/embed/7NFU1qvy48g?enablejsapi=1",
      index: 3,
    },
    {
      url: "https://www.youtube.com/embed/TgBPrF0M5ts?enablejsapi=1",
      index: 4,
    },
    {
      url: "https://www.youtube.com/embed/upoGHGqIGMQ?enablejsapi=1",
      index: 5,
    },
  ];
  const [index, setIndex] = useState(0);

  const handleSlide = (selectedIndex, direction) => {
    let frame;
    if (direction === "right") {
      if (videos.length - selectedIndex === 1) {
        frame = document.getElementById(
          "iframe-" + (videos.length - selectedIndex - 1)
        );
      } else {
        frame = document.getElementById("iframe-" + (selectedIndex + 1));
      }

      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo" }),
        "*"
      );
    } else {
      if (selectedIndex === 0) {
        frame = document.getElementById("iframe-" + (videos.length - 1));
      } else {
        frame = document.getElementById("iframe-" + (selectedIndex - 1));
      }

      frame.contentWindow.postMessage(
        JSON.stringify({ event: "command", func: "stopVideo" }),
        "*"
      );
    }
  };

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
      interval={null}
      activeIndex={index}
      onSelect={handleSelect}
      onSlide={handleSlide}
    >
      {videos.map((video) => {
        let frame = (
          <Carousel.Item key={video.index}>
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                title="video"
                id={"iframe-" + video.index}
                src={video.url}
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </Carousel.Item>
        );
        return frame;
      })}
    </Carousel>
  );
};
