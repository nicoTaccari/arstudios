import React, { useEffect, useState } from "react";
import YotubeService from "../../services/youtube";
import { VideosCarousel } from "../carousel";
import SectionHeader from "../../common/section-header";

const Youtube = () => {
  const [videos, setvideos] = useState([]);
  const subtitle =
    " See our latest studio sessions. We are looking forward to working with you in your next creation!";
  const title = "Live Sessions";

  // useEffect(() => {
  //   YotubeService.getVideos()
  //     .then((responseJson) => {
  //       console.log(responseJson.items);
  //       setvideos(
  //         responseJson.items.map((item, index) => ({
  //           url: "https://www.youtube.com/embed/" + item.id.videoId,
  //           index: index,
  //           thumbnail_url: item.snippet.thumbnails.default.url,
  //         }))
  //       );
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <section className="section" id="sessions">
      <div className="container">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="row">
          <div className="col">
            <VideosCarousel videos={videos} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Youtube;
