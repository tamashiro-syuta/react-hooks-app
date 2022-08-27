import { BrowserRouter, Route, Routes } from "react-router-dom"
import Counter2 from "./components/UseReducerSample"
import Counter from "./components/UseStateSample"

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/UseStateSample`} element={<Counter initialValue={0} />} />
        <Route path={`/UseReducerSample`} element={<Counter2 initialValue={0} />} />
      </Routes>
    </BrowserRouter>
  )
}
