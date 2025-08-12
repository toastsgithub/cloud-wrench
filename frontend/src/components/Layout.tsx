import { Route, Routes } from "react-router";
import { Navigation } from "./Navigation";
import { Home } from "@/pages/HomePage";
import { ExtractorsPage } from "@/pages/extractors";
import { URLParserPage } from "@/pages/url-parser";
import { TimeConverterPage } from "@/pages/time-converter";



export default function Layout() {
  return (
    <div className="w-full h-full flex flex-col">

      <Navigation />
      <div className="page-body flex-1 p-[10px]">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/time-converter" element={<TimeConverterPage />} />
          <Route path="/extractors" element={<ExtractorsPage />} />
          <Route path="/url-parser" element={<URLParserPage />} />
        </Routes>
      </div>
    </div>
  )
}
