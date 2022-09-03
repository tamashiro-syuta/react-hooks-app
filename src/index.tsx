import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Routing } from "./Routes";
import MyButton from "./originalComponent/myButton";
import { Counter } from "./components/UseStateSample";
import { Container } from "@mui/system";
import { Grid } from "@mui/material";

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
    <Grid container>
      <Grid item xs={12}>
        <h1>React hooksの使い方</h1>
        <p>devツールのコンソールなどを利用して、hooksの挙動を理解する</p>
      </Grid>

      <Grid item xs={4}>
        <MyButton href="/">Home</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseStateSample">UseStateSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseReducerSample">UseReducerSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/MemoSample1">MemoSample1</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/MemoSample2">MemoSample2</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseCallbackSample">UseCallbackSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseMemoSample">UseMemoSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseEffectSample">UseEffectSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseLayoutEffect">UseLayoutEffect</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/useContextSample">useContextSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseRefSample">UseRefSample</MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseImperativeHandleSample">
          UseImperativeHandleSample
        </MyButton>
      </Grid>
      <Grid item xs={4}>
        <MyButton href="/UseCustomHookSample">UseCustomHookSample</MyButton>
      </Grid>

      <Grid item xs={12}>
        <Routing />
      </Grid>
    </Grid>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
