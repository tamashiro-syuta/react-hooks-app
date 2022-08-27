import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./components/MemoSample1";
import { Parent as Parent2 } from "./components/MemoSample2";
import Counter2 from "./components/UseReducerSample";
import Counter from "./components/UseStateSample";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/UseStateSample`}
          element={<Counter initialValue={0} />}
        />
        <Route
          path={`/UseReducerSample`}
          element={<Counter2 initialValue={0} />}
        />
        <Route path={`/MemoSample1`} element={<Parent />} />
        <Route path={`/MemoSample2`} element={<Parent2 />} />
      </Routes>
    </BrowserRouter>
  );
};
