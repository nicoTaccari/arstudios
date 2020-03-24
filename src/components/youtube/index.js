import React, { useEffect, useState } from "react";
import YotubeService from "../../services/youtube";
import { VideosCarousel } from "../carousel";

export const Youtube = () => {
  const [videos, setvideos] = useState([]);
  const description =
    " Ultimas Grabaciones en nuestro estudio. Te estamos esperando para realizar tu proxima creacion!";
  const title = "Live Sessions";

  useEffect(() => {
    YotubeService.getVideos()
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
    <section className="section">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-8 text-center mb-5">
            <h2 class="text-uppercase heading border-bottom mb-4">{title}</h2>
            <p class="mb-0 lead">{description}</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <VideosCarousel videos={videos} />
          </div>
        </div>
      </div>
    </section>
  );
};
