import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Home, Page404 } from "./components/utils/helper";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
