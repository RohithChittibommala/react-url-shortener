import { useState } from "react";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

export type State = {
  loading: boolean;
  url: string;
  shortenedUrl: string;
};

function App() {
  const [state, setState] = useState<State>({
    loading: false,
    url: "",
    shortenedUrl: "",
  });

  return (
    <div className="app">
      <Navbar />
      <Main setState={setState} state={state} />
    </div>
  );
}

export default App;
