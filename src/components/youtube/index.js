import React, { useEffect, useState } from "react";
import YotubeService from "../../services/youtube";
import { VideosCarousel } from "../carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="col">
          <h1>{title}</h1>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <VideosCarousel videos={videos} />
        </div>
      </div>
    </div>
  );
};
