import { useState } from 'react'

// 引数(親コンポーネントから受け取る値の型を定義)
type CounterProps = {
  initialValue: number
}

const Counter = (props: CounterProps) => {
  // 親コンポーネントから受け取った値からinitialValueを取得(分割代入)
  const { initialValue } = props

  // initialValueを初期値として、状態を管理 (count => 現在の状態, setCount => 状態を変更する関数)
  const [count, setCount] = useState(initialValue)

  return (
    <div>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count - 1)}>-</button>

      {/* 更新関数(setCount)の引数に関数を渡した場合、関数の引数(ここでいうprevCount)には、現在の値が入ってる */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
    </div>
  )
}

export default Counter
