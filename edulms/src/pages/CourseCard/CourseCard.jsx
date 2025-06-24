// components/CourseCard.jsx
import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({
  image,
  title,
  rating,
  reviews,
  lessons,
  duration,
  level,
  author,
  priceOld,
  priceNew,
  badges,
}) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="coursesCard -type-1">
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-8">
            <img
              alt="course"
              src={image}
              className="w-1/1"
              style={{ height: "100%", width: "100%", color: "transparent" }}
            />
            <div className="coursesCard__image_overlay rounded-8"></div>
          </div>

          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
            {badges?.map((badge, i) => (
              <>
                <div>
                  <div key={i} className={`px-15 rounded-200 ${badge.bgClass}`}>
                    <span class="text-11 lh-1 uppercase fw-500 text-white">
                    {badge.label}
                    </span>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="h-100 pt-15">
          <div className="d-flex items-center">
            <div className="text-14 lh-1 text-yellow-1 mr-10">{rating}</div>
            <div className="text-13 lh-1 ml-10">({reviews})</div>
          </div>

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
            <Link className="linkCustom" to="/AllCourse">
              {title}
            </Link>
          </div>

          <div className="d-flex x-gap-10 items-center pt-10">
            <Info
              icon="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/1.svg"
              text={`${lessons} lesson`}
            />
            <Info icon="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/2.svg" text={duration} />
            <Info icon="https://educrat-nextjs.vercel.app/assets/img/coursesCards/icons/3.svg" text={level} />
          </div>

          <div className="coursesCard-footer">
            <div className="coursesCard-footer__author">
              <img src={author.image} alt="author" width="30" height="30" />
              <div>{author.name}</div>
            </div>
            <div className="coursesCard-footer__price">
              <div>₹{priceOld}</div>
              <div>₹{priceNew}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Info = ({ icon, text }) => (
  <div className="d-flex items-center">
    <div className="mr-8">
      <img src={icon} alt="icon" width="16" height="17" />
    </div>
    <div className="text-14 lh-1">{text}</div>
  </div>
);

export default CourseCard;
