import React, { useEffect, useState } from "react";
import { YOUTUBE_URL } from "../../Constants";

export const Youtube = () => {
  const [videos, setvideos] = useState([]);

  useEffect(() => {
    fetch(YOUTUBE_URL)
      .then(response => response.json())
      .then(responseJson => {
        // console.log(responseJson.items);
        setvideos(
          responseJson.items.map(
            item => "https://www.youtube.com/embed/" + item.id.videoId
          )
        );
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      {videos.length > 0 ? (
        videos.map((link, x) => {
          let frame = (
            <div class="embed-responsive embed-responsive-4by3">
              <iframe
                title="video"
                key={x}
                class="embed-responsive-item"
                src={link}
                allowfullscreen
              ></iframe>
            </div>
          );
          return frame;
        })
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};
