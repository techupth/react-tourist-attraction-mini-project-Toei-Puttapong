import TouristCard from "./TouristCard";
import { useState, useEffect } from "react";
import { DebounceInput } from "react-debounce-input";
import axios from "axios";

function TouristRender() {
  const [touristAttraction, setTouristAttraction] = useState([]);
  const [touristSearch, setTouristSearch] = useState("");

  const getTouristAttraction = async () => {
    const result = await axios.get(
      `http://localhost:4001/trips?keywords=${touristSearch}`
    );
    setTouristAttraction(result.data.data);
  };

  const handleTagSearch = (tagValue) => {
    if (touristSearch === "") {
      setTouristSearch(tagValue);
    } else if (touristSearch.search(tagValue) === -1) {
      setTouristSearch(touristSearch + " " + tagValue);
    }
  };

  useEffect(() => {
    getTouristAttraction();
  }, [touristSearch]);

  return (
    <div className="tourist-render">
      <header>
        <h1>เที่ยวไหนดี</h1>
        <div className="tourist-render-search">
          <label htmlFor="search-text">ค้นหาที่เที่ยว</label>
          <DebounceInput
            minLength={2}
            debounceTimeout={300}
            onChange={(event) => setTouristSearch(event.target.value)}
            value={touristSearch}
            placeholder="หาที่เที่ยวแล้วไปกัน..."
            id="search-text"
          />
          <button onClick={() => setTouristSearch("")}>X</button>
        </div>
      </header>

      <div className="tourist-render-card">
        {touristAttraction.map((item) => {
          return (
            <div key={item.id}>
              <TouristCard
                image={item.photos}
                title={item.title}
                description={item.description}
                tags={item.tags}
                link={item.url}
                onValueChange={handleTagSearch}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default TouristRender;
