import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Parent as MemoSample1 } from "./components/MemoSample1";
import { Parent as MemoSample2 } from "./components/MemoSample2";
import { Parent as UseCallbackSample } from "./components/UseCallbackSample";
import { Parent as UseContextSample } from "./components/UseContextSample";
import { Parent as UseImperativeHandleSample } from "./components/UseImperativeHandleSample";
import { Clock as UseEffectSample } from "./components/UseEffectSample";
import { Clock as UseLayoutEffect } from "./components/UseLayoutEffectSample";
import UseMemoSample from "./components/UseMemoSample";
import { Counter as UseReducerSample } from "./components/UseReducerSample";
import { ImageUploader as UseRefSample } from "./components/UseRefSample";
import { Counter as UseStateSample } from "./components/UseStateSample";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={`/UseStateSample`}
          element={<UseStateSample initialValue={0} />}
        />
        <Route
          path={`/UseReducerSample`}
          element={<UseReducerSample initialValue={0} />}
        />
        <Route path={`/MemoSample1`} element={<MemoSample1 />} />
        <Route path={`/MemoSample2`} element={<MemoSample2 />} />
        <Route path={`/UseCallbackSample`} element={<UseCallbackSample />} />
        <Route path={`UseMemoSample`} element={<UseMemoSample />} />
        <Route path={`UseEffectSample`} element={<UseEffectSample />} />
        <Route path={`UseLayoutEffect`} element={<UseLayoutEffect />} />
        <Route path={`useContextSample`} element={<UseContextSample />} />
        <Route path={`UseRefSample`} element={<UseRefSample />} />
        <Route
          path={`UseImperativeHandleSample`}
          element={<UseImperativeHandleSample />}
        />
      </Routes>
    </BrowserRouter>
  );
};
