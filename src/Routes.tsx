import { BrowserRouter, Route, Routes } from "react-router-dom";
import Parent from "./components/MemoSample1";
import { Parent as Parent2 } from "./components/MemoSample2";
import { Parent as Parent3 } from "./components/UseCallbackSample";
import { Parent as Parent4 } from "./components/UseContextSample";
import Clock from "./components/UseEffectSample";
import { Clock as Clock2 } from "./components/UseLayoutEffectSample";
import UseMemoSample from "./components/UseMemoSample";
import Counter2 from "./components/UseReducerSample";
import ImageUploader from "./components/UseRefSample";
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
        <Route path={`/UseCallbackSample`} element={<Parent3 />} />
        <Route path={`UseMemoSample`} element={<UseMemoSample />} />
        <Route path={`UseEffectSample`} element={<Clock />} />
        <Route path={`UseLayoutEffect`} element={<Clock2 />} />
        <Route path={`useContextSample`} element={<Parent4 />} />
        <Route path={`UseRefSample`} element={<ImageUploader />} />
      </Routes>
    </BrowserRouter>
  );
};
