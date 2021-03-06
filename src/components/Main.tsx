import { useRef } from "react";

interface Props {}
const Main: React.FC<Props> = (props) => {
  const ref = useRef<HTMLInputElement>(null);
  const handleUrlShorten = () => {
    fetch(
      `${process.env.REACR_APP_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&short=${ref.current?.value}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="main">
      <div>
        <img src={require("../assets/illustration.svg").default} alt="" />
      </div>
      <div className="input-box">
        <input type="text" placeholder="Type or paste your link" ref={ref} />
        <button onClick={handleUrlShorten} className="shrink-btn">
          Shrink
        </button>
      </div>
    </div>
  );
};

export default Main;
