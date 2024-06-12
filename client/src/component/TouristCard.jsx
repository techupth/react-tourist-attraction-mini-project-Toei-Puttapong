/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";

function TouristCard(prop) {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div
      className="tourist-card-container"
      css={css`
        width: 1200px;
        display: flex;
        margin: 1rem;
        gap: 1.5rem;
      `}
    >
      <div
        className="tourist-card-left"
        css={css`
          flex: 1;
          text-align: center;
        `}
      >
        <div className="tourist-card-left-img">
          <img
            src={prop.image[0]}
            alt=""
            css={css`
              width: 400px;
              height: 250px;
              object-fit: cover;
              border-radius: 20px;
            `}
          />
        </div>
      </div>
      <div
        className="tourist-card-right"
        css={css`
          flex: 2;
        `}
      >
        <div
          className="tourist-card-right-title"
          css={css`
            font-size: 1.5rem;
          `}
        >
          {prop.title}
        </div>
        <div
          className="tourist-card-right-description"
          css={css`
            color: #8a8a8a;
          `}
        >
          {showContent
            ? prop.description
            : `${prop.description.substring(0, 100)}...`}
        </div>
        <button
          onClick={handleShowContent}
          css={css`
            color: #71bbe6;
            background: none;
            text-decoration-line: underline;
          `}
        >
          {showContent ? "แสดงน้อยลง" : "อ่านต่อ"}
        </button>
        <div
          className="tourist-card-right-tags"
          css={css`
            display: flex;
            gap: 1rem;
            color: #8a8a8a;
          `}
        >
          หมวด
          {prop.tags.map((tag, index) => {
            if (index !== prop.tags.length - 1) {
              return (
                <button
                  key={index}
                  css={css`
                    background: none;
                    text-decoration-line: underline;
                    color: #8a8a8a;
                    font-size: 1rem;
                  `}
                >
                  {tag}
                </button>
              );
            } else {
              return (
                <div>
                  และ
                  <button
                    key={index}
                    css={css`
                      background: none;
                      text-decoration-line: underline;
                      color: #8a8a8a;
                      font-size: 1rem;
                    `}
                  >
                    {tag}
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div
          className="tourist-card-right-img"
          css={css`
            display: flex;
            gap: 1.5rem;
            margin-top: 1rem;
          `}
        >
          {prop.image.map((img, index) => {
            if (index !== 0) {
              return (
                <img
                  key={index}
                  src={img}
                  alt=""
                  css={css`
                    width: 100px;
                    height: 100px;
                    object-fit: cover;
                    border-radius: 10px;
                  `}
                />
              );
            }
          })}
        </div>
        <a
          className="link-icon"
          href={prop.link}
          target="_blank"
          css={css`
            position: relative;
            top: -50px;
            right: -600px;
          `}
        >
          <span class="material-symbols-outlined">link</span>
        </a>
      </div>
    </div>
  );
}
export default TouristCard;
