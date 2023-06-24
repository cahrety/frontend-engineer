import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Create from "./pages/movie/Create";
import NowPlaying from "./pages/movie/NowPlaying";
import Popular from "./pages/movie/Popular";
import TopRated from "./pages/movie/TopRated";
import Layout from "./Layout/Layout";

import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import Detail from "./pages/movie/Detail";

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/movie/create" element={<Create />} />
          <Route path="/movie/popular" element={<Popular />} />
          <Route path="/movie/now" element={<NowPlaying />} />
          <Route path="/movie/top" element={<TopRated />} />
          <Route path="/movie/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
