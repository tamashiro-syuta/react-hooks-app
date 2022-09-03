import { memo, useState } from "react";

type FizzProps = {
  isFizz: boolean;
};

// Fizzは通常の関数コンポーネント
// isFizzの変化に関わらず、親が再描画されるとFizzも再描画される
const Fizz = (props: FizzProps) => {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
};

type BuzzProps = {
  isBuzz: boolean;
};

// Buzzはメモ化した関数コンポーネント
// メモ化 : 必要のない子要素のレンダリングや計算を防ぐ
// 親コンポーネントが再描画されても、isBuzzが変化しない限りはBuzzは再描画しない
const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props;
  console.log(`Buzzが再描画されました, izBuzz=${isBuzz}`);
  return <span>{isBuzz ? "Buzz" : ""}</span>;
});

export const Parent = () => {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log(`Parentが再描画されました, count=${count}`);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  );
};
