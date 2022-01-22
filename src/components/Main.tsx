import { useState} from "react";
import { State } from "../App";
import QRCode from "react-qr-code";
interface Props {
  setState: React.Dispatch<React.SetStateAction<State>>;
  state: State;
}
const Main: React.FC<Props> = ({ setState, state }) => {
  

  const [ inputUrl,setInputUrl]=useState("")

  const handleUrlShorten = () => {
    
    setState((prev) => ({ ...prev, loading: true }));
   

    // https://cutt.ly/api/api.php?key=[API_KEY]&short=$url&name=[CUSTOM_URL_ALIAS]


    const url=encodeURIComponent(inputUrl)


    fetch(
      `${process.env.REACT_APP_BASE_URL}?key=${process.env.REACT_APP_API_KEY}&short=${url}`,{
        mode: "no-cors",
      }
    )
      .then((res) => {
       
       
        console.log(res);


        res.json()
      })
      .then((res) => {


        

        setState((prev) => ({
          ...prev,
          loading: false,
          shortenedUrl: res.url?.shortLink,
        }));
        
      })
      .catch((err) =>{
        console.log(err);
        
          setState((prev) => ({ ...prev, loading: false }));
      })
  };

  const validURL = (str: string = "") => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    pattern.test(str) && handleUrlShorten();
  };

  const text = state.loading ? "shrinking" : "shrink";

  return (
    <>
      <div className="main">
        <div className="illustration">
          <img src={require("../assets/illustration.svg").default} alt="" />
        </div>
        <div className="input-box-container">
          <div className="text">
            <h2>Keep it brief</h2>
            <h2>
              A <span>easier</span> way to <span>share links</span>
            </h2>
          </div>
          <div className="input-box">
            <input
              type="text"
              value={inputUrl}
              onChange={e=>setInputUrl(e.target.value)}
              placeholder="Type or paste your link"
            />
            <button
              onClick={() => validURL(inputUrl)}
              disabled={state.loading}
              className={`shrink-btn ${state.loading ? `active` : ``}`}
            >
              {text}
            </button>
          </div>
        </div>
      </div>
      <div>
        {state.shortenedUrl && (
          <div className="shrinked-link">
            <div>
              <h2>There you go !</h2>
            </div>
            <div className="outer">
              <div className="inner">
                <p>{state.shortenedUrl}</p>
                <img
                  src={require("../assets/clipboard.svg").default}
                  alt="clipboard svg"
                  onClick={() =>
                    navigator.clipboard.writeText(state.shortenedUrl)
                  }
                />
              </div>
              <div className="qr-code">
                <QRCode value={state.shortenedUrl} size={200} />,
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Main;
