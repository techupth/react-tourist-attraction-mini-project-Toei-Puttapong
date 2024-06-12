import { useState } from "react";

function TouristCard(prop) {
  const [copySuccess, setCopySuccess] = useState("");

  const handleTagSearch = (tagValue) => {
    prop.onValueChange(tagValue);
  };

  const handleCoppyLink = () => {
    navigator.clipboard.writeText(prop.link);
    setCopySuccess("copied✓");
    setTimeout(() => {
      setCopySuccess();
    }, 1000);
  };

  return (
    <div className="tourist-card-container">
      <div className="tourist-card-left">
        <div className="tourist-card-left-img">
          <img src={prop.image[0]} alt="" width={400} height={250} />
        </div>
      </div>
      <div className="tourist-card-right">
        <div className="tourist-card-right-title">{prop.title}</div>
        <div className="tourist-card-right-description">
          {prop.description.substring(0, 100)}...
        </div>
        <a href={prop.link} target="_blank">
          อ่านต่อ
        </a>
        <div className="tourist-card-right-tags">
          หมวด
          {prop.tags.map((tag, index) => {
            if (index !== prop.tags.length - 1) {
              return (
                <button key={index} onClick={() => handleTagSearch(tag)}>
                  {tag}
                </button>
              );
            } else {
              return (
                <div>
                  และ
                  <button key={index} onClick={() => handleTagSearch(tag)}>
                    {tag}
                  </button>
                </div>
              );
            }
          })}
        </div>
        <div className="tourist-card-right-img">
          {prop.image.map((img, index) => {
            if (index !== 0) {
              return (
                <img key={index} src={img} alt="" width={100} height={100} />
              );
            }
          })}
        </div>
        <div className="tourist-card-copyLink">
          <button onClick={handleCoppyLink}>
            <i class="bx bx-link"></i>
          </button>
          <span>{copySuccess}</span>
        </div>
      </div>
    </div>
  );
}

export default TouristCard;
