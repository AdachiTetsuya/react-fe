import { useEffect, useState } from "react";
import { get } from "./api/get";

function App() {
  const [word, setWord] = useState<string>();

  useEffect(() => {
    get().then((res) => setWord(res));
  }, []);

  return (
    <>
      <p>{word}</p>
    </>
  );
}

export default App;
