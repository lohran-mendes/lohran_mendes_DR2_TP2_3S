import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Question_01 from "./question-01/question-01.jsx";
import Question_02 from "./question-02/question-02.jsx";
import Question_03 from "./question-03/question-03.jsx";
import Question_04 from "./question-04/question-04.jsx";
import Question_05 from "./question-05/question-05.jsx";
import Question_06 from "./question-06/question-06.jsx";
import Question_07 from "./question-07/question-07.jsx";
import Question_08 from "./question-08/question-08.jsx";
import Question_09 from "./question-09/question-09.jsx";
import Question_10 from "./question-10/question-10.jsx";
import Question_11 from "./question-11/question-11.jsx";
import Question_12 from "./question-12/question-12.jsx";
import Question_13 from "./question-13/question-13.jsx";
import Question_14 from "./question-14/question-14.jsx";
import Question_15 from "./question-15/question-15.jsx";
import Question_16 from "./question-16/question-16.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/*" element={<App />} />
      <Route path="/question_01" element={<Question_01 />} />
      <Route path="/question_02" element={<Question_02 />} />
      <Route path="/question_03" element={<Question_03 />} />
      <Route path="/question_04" element={<Question_04 />} />
      <Route path="/question_05" element={<Question_05 />} />
      <Route path="/question_06" element={<Question_06 />} />
      <Route path="/question_07" element={<Question_07 />} />
      <Route path="/question_08" element={<Question_08 />} />
      <Route path="/question_09" element={<Question_09 />} />
      <Route path="/question_10" element={<Question_10 />} />
      <Route path="/question_11" element={<Question_11 />} />
      <Route path="/question_12" element={<Question_12 />} />
      <Route path="/question_13" element={<Question_13 />} />
      <Route path="/question_14" element={<Question_14 />} />
      <Route path="/question_15" element={<Question_15 />} />
      <Route path="/question_16" element={<Question_16 />} />
    </Routes>
  </BrowserRouter>
);