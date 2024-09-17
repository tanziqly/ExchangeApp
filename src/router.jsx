import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Layout from "./layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
