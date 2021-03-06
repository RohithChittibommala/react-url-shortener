import { useRef } from "react";
import "./App.css";

function App() {
  const BASE_URL = `https://cors.bridged.cc/https://cutt.ly/api/api.php`;
  const ref = useRef<HTMLInputElement>(null);
  const handleUrlShorten = () => {
    fetch(
      `${BASE_URL}?key=${process.env.REACT_APP_API_KEY}&short=${ref.current?.value}`
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input type="text" ref={ref} />
      <div className="shorten" onClick={handleUrlShorten}>
        shorten
      </div>
    </div>
  );
}

export default App;
