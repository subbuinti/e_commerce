import React, { Fragment, useState, useEffect } from "react";
import "./saleannouncementcard.css";

const SaleAnnouncementCard = (props) => {
  const endTime = new Date("Jan 30, 2023 00:00:00").getTime();

  const [currentTime, setCurrentTime] = useState(new Date().getTime());

  const gap = endTime - currentTime;

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor((gap % days) / hours);
  const remainingMinutes = Math.floor((gap % hours) / minutes);
  const remainingSeconds = Math.floor((gap % minutes) / seconds);

  useEffect(() => {
    setTimeout(() => setCurrentTime(new Date().getTime()), 1000);
  }, [currentTime]);

  if (gap === 0) alert("Deals Ended");

  return (
    <Fragment>
      <div className="cards-section__offers">
        <div className="img__holder">
          <img
            src={props.offerImage}
            alt="offerItem"
            className="offer-item__img"
          />
        </div>
        <div className="holder__details">
          <p className="text-danger fw-bold">On Sale 25%</p>
          <p className="timer__text">
            {remainingDays}:{remainingHours}:{remainingMinutes}:
            {remainingSeconds}
          </p>
        </div>
        <div className="card__heading">
          <h3>{props.cardHeading}</h3>
          <p className="text-danger">
            shop your everyday essentials here at lower prices.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SaleAnnouncementCard;
