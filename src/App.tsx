import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Tv from "./Routes/Tv";
import Search from "./Routes/Search";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="movies/:movieId" element={<Home />} />
        </Route>
        <Route path="/tv" element={<Tv />}>
          <Route path=":TvId" element={<Tv />}></Route>
        </Route>
        <Route path="/search" element={<Search />}>
          <Route path=":TvId" element={<Search />}></Route>
          <Route path=":movieId" element={<Search />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
