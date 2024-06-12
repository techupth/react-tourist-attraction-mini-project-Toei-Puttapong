/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import TouristCard from "./TouristCard";
import { useState, useEffect } from "react";
import axios from "axios";

function TouristRender() {
  const [touristAttraction, setTouristAttraction] = useState([]);
  const [touristSearch, setTouristSearch] = useState("");
  //   console.log(touristSearch);

  const getTouristAttraction = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${touristSearch}`
    );
    // console.log(touristSearch);
    console.log(result);
    setTouristAttraction(result.data.data);
  };

  useEffect(() => {
    getTouristAttraction();
  }, [touristSearch]);

  return (
    <div>
      <header
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          margin-top: 2rem;
          margin-bottom: 2rem;
        `}
      >
        <h1
          css={css`
            color: #71bbe6;
            font-size: 4rem;
            font-weight: 400;
          `}
        >
          เที่ยวไหนดี
        </h1>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 80%;
            font-size: 1rem;
          `}
        >
          <label htmlFor="search-text">ค้นหาที่เที่ยว</label>
          <input
            id="search-text"
            type="text"
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            css={css`
              width: 100%;
              border-bottom: 1px solid #8a8a8a;
              text-align: center;
              font-size: 1rem;
            `}
            onChange={(event) => setTouristSearch(event.target.value)}
          />
        </div>
      </header>

      <div
        className="tourist-card"
        css={css`
          display: flex;
          flex-direction: column;
          align-items: center;
        `}
      >
        {touristAttraction.map((item) => {
          return (
            <div>
              <TouristCard
                image={item.photos}
                title={item.title}
                description={item.description}
                tags={item.tags}
                link={item.url}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TouristRender;
