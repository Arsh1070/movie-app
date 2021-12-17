import "./App.css";
import { useState } from "react";
import arrayData from "./jsonData";

function App() {
  const [inner, setInner] = useState("");
  const [opTion, setOption] = useState("Title");
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(8);
  const [isShown, setIsShown] = useState(false);

  const handleNext = () => {
    if (count2 < arrayData.length) {
      setCount1(count1 + 8);
      setCount2(count2 + 8);
    }
  };
  const handlePrev = () => {
    setCount1(count1 - 8);
    setCount2(count2 - 8);
  };

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  return (
    <>
      <div className="main">
        <input
          type="text"
          value={inner}
          onChange={(e) => setInner(e.target.value)}
        />

        <select value={opTion} onChange={handleChange} className="options">
          <option value="Title">Title</option>
          <option value="Year">Year</option>
          <option value="BoxOffice">BoxOffice</option>
          <option value="imdbRating">Rating</option>
        </select>
        {count1 > 7 ? (
          <button type="submit" onClick={handlePrev}>
            Prev
          </button>
        ) : (
          <button type="submit" disabled="disabled">
            Prev
          </button>
        )}
        <button type="submit" onClick={handleNext}>
          Next
        </button>
      </div>

      {(opTion === "Title" &&
        arrayData.slice(count1, count2).map((item) => {
          return (
            <div className="container" key={item.imdbID}>
              <h2>{item.Title}</h2>
              <img
                src={item.Poster}
                alt="pic"
                width="250px"
                height="250px"
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
              />
              {isShown && (
                <div>
                  <p>Released date : {item.Released}</p>
                  <p>Director : {item.Director}</p>
                  <p>Actors : {item.Actors}</p>
                </div>
              )}
            </div>
          );
        })) ||
        (opTion === "Year" &&
          arrayData.slice(count1, count2).map((item) => {
            return (
              <div className="container" key={item.imdbID}>
                <h2>{item.Year}</h2>

                <img
                  src={item.Poster}
                  alt="pic"
                  width="250px"
                  height="250px"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />

                {isShown && (
                  <div>
                    <p>Released date : {item.Released}</p>
                    <p>Director : {item.Director}</p>
                    <p>Actors : {item.Actors}</p>
                  </div>
                )}
              </div>
            );
          })) ||
        (opTion === "BoxOffice" &&
          arrayData.slice(count1, count2).map((item) => {
            return (
              <div className="container" key={item.imdbID}>
                <h2>{item.BoxOffice}</h2>
                <img
                  src={item.Poster}
                  alt="pic"
                  width="250px"
                  height="250px"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
                {isShown && (
                  <div>
                    <p>Released date : {item.Released}</p>
                    <p>Director : {item.Director}</p>
                    <p>Actors : {item.Actors}</p>
                  </div>
                )}
              </div>
            );
          })) ||
        (opTion === "imdbRating" &&
          arrayData.slice(count1, count2).map((item) => {
            return (
              <div className="container" key={item.imdbID}>
                <h2>{item.imdbRating}</h2>
                <img
                  src={item.Poster}
                  alt="pic"
                  width="250px"
                  height="250px"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                />
                {isShown && (
                  <div>
                    <p>Released date : {item.Released}</p>
                    <p>Director : {item.Director}</p>
                    <p>Actors : {item.Actors}</p>
                  </div>
                )}
              </div>
            );
          }))}
    </>
  );
}

export default App;
