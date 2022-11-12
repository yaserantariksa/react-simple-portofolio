import "./intro.css";
import Me from "../../img/me.png";

import React from "react";

function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <div className="intro-left-warpper">
          <h3 className="intro-hello">Hello, my name is</h3>
          <h2 className="intro-name">
            YaserAntariksa<span className="intro-name-span">;</span>
          </h2>
          <div className="intro-tittle">
            <div className="intro-tittle-warpper">
              <div className="intro-tittle-item">Mobile Developer</div>
              <div className="intro-tittle-item">Web Developer</div>
              <div className="intro-tittle-item">Full Stack Developer</div>
            </div>
          </div>
          <div className="intro-desc">
            <p>
              Build Modern Android and Web Application for customer of all size.
              Bussiness App, Online Learning App, Services, Ecommerce, Community
              App, and many more.
            </p>
          </div>
        </div>
        <svg
          width="75"
          height="75"
          viewBox="0 0 75 75"
          fill="none"
          stroke="white"
          className="intro-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="intro-right">
        <div className="shape-bg">
          <svg
            width="800"
            height="800"
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <clipPath id="shape">
                <path
                  fill="currentColor"
                  d="M846.5,625.5Q700,751,551.5,837Q403,923,285,791.5Q167,660,109.5,472Q52,284,223.5,161.5Q395,39,548.5,142.5Q702,246,847.5,373Q993,500,846.5,625.5Z"
                ></path>
              </clipPath>
            </defs>
            <g clip-path="url(#shape)">
              <path
                fill="#FFA500"
                d="M846.5,625.5Q700,751,551.5,837Q403,923,285,791.5Q167,660,109.5,472Q52,284,223.5,161.5Q395,39,548.5,142.5Q702,246,847.5,373Q993,500,846.5,625.5Z"
              />
            </g>
          </svg>
        </div>
        <img src={Me} alt="me" className="intro-image" />
      </div>
    </div>
  );
}

export default Intro;
