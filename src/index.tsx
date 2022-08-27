import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Routing } from './Routes';
import { Button } from '@mui/material';

// 【Reactのコードが反映されるまでの順序】
// 1.public/index.htmlが読み込まれて、ブラウザで表示
// 2.ブラウザがjsのコードを取得し、Reactで書いたコードを実行
// 3.render()で与えられたAppを、root作成時に与えられたrootというidを持つ要素以下に描画する

// idがrootの要素を指定
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <h1>React hooksの使い方</h1>

    <Button
      variant='contained'
      sx={{margin: 1}}
      href='/'
    >
      Home
    </Button>
    <Button
      variant='contained'
      sx={{margin: 1}}
      href='/UseStateSample'
    >
      UseStateSample
    </Button>
    <Button
      variant='contained'
      sx={{margin: 1}}
      href='/UseReducerSample'
    >
      UseReducerSample
    </Button>
    <Routing />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
