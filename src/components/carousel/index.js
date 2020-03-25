import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Spinner from "react-bootstrap/Spinner";

export const VideosCarousel = props => {
  const { videos } = props;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      {videos.length > 0 ? (
        videos.map((link, index) => {
          let frame = (
            <Carousel.Item>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  title="video"
                  src={link}
                  key={index}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
            </Carousel.Item>
          );
          return frame;
        })
      ) : (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
    </Carousel>
  );
};
