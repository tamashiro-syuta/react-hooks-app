import React, { useState, useRef, useImperativeHandle } from "react";

// React.forwardRef => 子コンポーネントで親から渡されたrefを参照するためのやつ
const Child = React.forwardRef((_, ref) => {
  const [message, setMessage] = useState<string | null>(null);

  // useImperativeHandleで親のrefから参照できる値を指定
  // 第1引数 => 親から渡されたref
  // 第2引数 => オブジェクトが返す関数
  // 第3引数 => 依存配列
  useImperativeHandle(ref, () => ({
    // showMessageという関数を定義(ただのアロー関数にしないのは、呼び出す時にchildRef.current.関数名で呼べるように)
    showMessage: () => {
      const date = new Date();
      const message = `Hello, it's ${date.toLocaleString()} now`;
      setMessage(message);
    },
  }));

  return <div>{message !== null ? <p>{message}</p> : null}</div>;
});

export const Parent = () => {
  // 子コンポーネントのrefを定義(showMessageという関数の型)
  const childRef = useRef<{ showMessage: () => void }>(null);
  const onClick = () => {
    if (childRef.current !== null) {
      // 子のuseImperativeHandleで指定した値を参照
      // childRef.currentには、Child要素が入る(下でChildをchildRefを紐付けているから)
      childRef.current.showMessage();
    }
  };

  return (
    <div>
      {/* onClickは、ref経由でshowMessageを呼び出している */}
      <button onClick={onClick}>Show Message</button>
      {/* ChildコンポーネントとchildRefを紐付け */}
      <Child ref={childRef} />
    </div>
  );
};
