import React, { useState, useCallback } from "react";

// ------------------------------------------------------------------------------
// Decrement => 通常コンポーネント、通常関数 => 他の関数が呼ばれると、再レンダリング
// Increment => メモ化コンポーネント、通常関数 => 他の関数が呼ばれると、再レンダリング
// PlusTwoButton => 通常コンポーネント、useCallback関数で関数をメモ化 => 他の関数が呼ばれると、再レンダリング
// Double => メモ化コンポーネント、useCallback関数で関数をメモ化 => 呼ばれない限り再レンダリングされない

// 結果：メモ化コンポーネント + useCallback関数 でないとレンダリングされない
// ------------------------------------------------------------------------------

type ButtonProps = {
  onClick: () => void;
};

// DecrementButtonは通常の関数コンポーネントでボタンを表示する
const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log("DecrementButtonが再描画されました");

  return <button onClick={onClick}>Decrement</button>;
};

// IncrementButtonはメモ化した関数コンポーネントでボタンを表示する
const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log("IncrementButtonが再描画されました");

  return <button onClick={onClick}>Increment</button>;
});

// PlusTwoButtonは通常の関数コンポーネントでボタンを表示する
const PlusTwoButton = (props: ButtonProps) => {
  const { onClick } = props;

  console.log("PlusTwoButtonが再描画されました");

  return <button onClick={onClick}>PlusTwoButton</button>;
};

// DoubleButtonはメモ化した関数コンポーネントでボタンを表示する
const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;

  console.log("DoubleButtonが再描画されました");

  return <button onClick={onClick}>Double</button>;
});

export const Parent = () => {
  const [count, setCount] = useState(0);

  // 通常の関数として定義
  const decrement = () => {
    setCount((c) => c - 1);
  };
  // 通常の関数として定義
  const increment = () => {
    setCount((c) => c + 1);
  };

  // 通常の関数として定義
  const plusTwo = useCallback(() => {
    setCount((c) => c + 2)
  }, [])

  // useCallbackを使って関数をメモ化する
  // useCallbackの第1引数は関数、第2引数は依存配列
  const double = useCallback(() => {
    setCount((c) => c * 2);
    // 第2引数は空配列なので、比較対象がなく、useCallbackは常に同じ関数を返す(再レンダリングされない)
  }, []);

  // 悪い事例(useCallbackを使用しても再レンダリングされる)
  // const double = useCallback(() => {
  //   setCount(() => count * 2);
  // 第2引数はcountなので、他のどれかのボタンが押される度に、useCallbackが依存配列(count)と比較し、(どのボタンを押してもcountの値は変化するので)、関数が再描画される
  // }, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* コンポーネントに関数を渡す */}
      {/* メモ化も、useCallbackもされてないので、Parentがレンダリングされる度に再レンダリングされる */}
      <DecrementButton onClick={decrement} />
      {/* メモ化コンポーネントに関数を渡す */}
      {/* メモ化はしているが、親コンポーネント(Parent)から渡される関数がuseCallbackされてないので、Prentがレンダリングされる度に、再レンダリングされる */}
      <IncrementButton onClick={increment} />
      {/* メモ化コンポーネントに通常の関数を渡す */}
      <PlusTwoButton onClick={plusTwo} />
      {/* メモ化コンポーネントにメモ化した関数を渡す */}
      <DoubleButton onClick={double} />
    </div>
  );
};
