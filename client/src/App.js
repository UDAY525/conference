import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Form from "./pages/Form";
import Detailed from "./pages/Detailed";
import Query from "./pages/Query";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/form" element={<Form />}></Route>
        <Route path="/detailed" element={<Detailed />}></Route>
        <Route path="/query" element={<Query />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
