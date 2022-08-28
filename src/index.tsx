import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routing } from "./Routes";
import MyButton from "./originalComponent/myButton";
import Counter from "./components/UseStateSample";
import { Container } from "@mui/system";

// 【Reactのコードが反映されるまでの順序】
// 1.public/index.htmlが読み込まれて、ブラウザで表示
// 2.ブラウザがjsのコードを取得し、Reactで書いたコードを実行
// 3.render()で与えられたAppを、root作成時に与えられたrootというidを持つ要素以下に描画する

// idがrootの要素を指定
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Container fixed>
      <h1>React hooksの使い方</h1>

      <MyButton href="/">Home</MyButton>
      <MyButton href="/UseStateSample">UseStateSample</MyButton>
      <MyButton href="/UseReducerSample">UseReducerSample</MyButton>
      <MyButton href="/MemoSample1">MemoSample1</MyButton>
      <MyButton href="/MemoSample2">MemoSample2</MyButton>
      <MyButton href="/UseCallbackSample">UseCallbackSample</MyButton>

      <Routing />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
