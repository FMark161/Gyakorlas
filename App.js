import { BrowserRouter, Route, Routes } from "react-router-dom";
import Filmek from "./Filmek";
import Film from "./Film";
import UjFilm from "./ujFilm";
import EditFilm from "./EditFilm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Filmek />} />
        <Route path="/filmek/:id" element={<Film />} />
        <Route path="/uj" element={<UjFilm />} />
        <Route path="/filmek/edit/:id" element={<EditFilm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;