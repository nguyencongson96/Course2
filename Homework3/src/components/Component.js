import React, { useState } from "react";

const Component = (props) => {
  const {
    item: { author, titleVideo, thumnail, viewCount },
  } = props;
  const formatNum = new Intl.NumberFormat(undefined, { notation: "compact" });
  const [newViewCount, setNewViewCount] = useState(Number(viewCount));
  function increaseView() {
    setNewViewCount(newViewCount + 100000000);
  }
  return (
    <>
      <div className="youtube-item" onClick={increaseView}>
        <div className="youtube-image">
          <img src={thumnail} alt="something"></img>
        </div>
        <div className="youtube-footer">
          <img src={thumnail} alt="" className="youtube-avatar" />

          <div className="youtube-info">
            <div className="youtube-title">{titleVideo}</div>
            <div className="youtube-author">{author}</div>
            <div className="youtube-viewcount">
              {`${formatNum.format(newViewCount)} ${
                newViewCount <= 1 ? "view" : "views"
              }`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Component;
