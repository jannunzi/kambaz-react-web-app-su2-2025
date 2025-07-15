import Kambaz from "./Kambaz";
import Labs from "./Labs/index.tsx";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div>
        {/* <h1>Hello World</h1> */}
        <Routes>
          <Route path="Labs/*" element={<Labs />} />
          <Route path="Kambaz/*" element={<Kambaz />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
