import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/HomePage";
import ExchangePage from "./Pages/ExchangePage";
import AboutPage from "./Pages/AboutPage";

import Layout from "./layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<ExchangePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
