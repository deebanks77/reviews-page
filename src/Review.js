import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, image, job, text } = people[index];
  const lastReview = people.length - 1;
  console.log(index);

  const checkNumber = (num) => {
    if (num < 0) {
      return lastReview;
    }
    if (num > lastReview) {
      return 0;
    }
    return num;
  };

  const handlePrev = () => {
    setIndex((index) => checkNumber(index - 1));
  };

  const handleNext = () => {
    setIndex((index) => checkNumber(index + 1));
  };

  const handleRandom = () => {
    let random = Math.floor(Math.random() * people.length);
    if (random === index) {
      random = index + 1;
    }
    setIndex(checkNumber(random));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={handlePrev}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={handleNext}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={handleRandom}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
