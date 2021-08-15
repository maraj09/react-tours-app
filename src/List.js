import React, { useState } from "react";

const List = ({ tour, deleteTour }) => {
  const [more, setMore] = useState(false);
  return (
    <>
      <div className="content">
        <div className="content_img">
          <img src={tour.image} alt="" />
          <div className={more ? "content_info height250" : "content_info"}>
            <div className="title">
              <span>{tour.name}</span>
            </div>
            <div className="price">
              <div className="box">
                <span>${tour.price}</span>
              </div>
            </div>
            <div className="des_info">
              <p>
                {more ? tour.info : tour.info.substring(0, 200)} ... <span onClick={() => setMore(!more)}>{more ? `Show Less` : `Read More`}</span>
              </p>
            </div>
            <div className="hide">
              <button onClick={() => deleteTour(tour.id) }>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default List;
