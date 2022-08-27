import { useReducer } from 'react'

type Action = 'DECREMENT' | 'INCREMENT' | 'DOUBLE' | 'RESET'

// 現在の状態とactionに基づいて、次の状態を返す
// actionとは、何かしらリアクションが起きた時に送信するデータ（オブジェクト）のこと
// ここでは、dispatchに渡す'RESET'などのデータ
const reducer = (currentCount: number, action: Action) => {
  switch (action) {
    case 'INCREMENT':
      return currentCount + 1
    case 'DECREMENT':
      return currentCount - 1
    case 'DOUBLE':
      return currentCount * 2
    case 'RESET':
      return 0
    default:
      return currentCount
  }
}

type CounterProps = {
  initialValue: number
}

// useReducer()の返り値から、countと、dispatchを分割代入で取得
  // useReducer(stateを更新する関数, 初期値)
  // 戻り値は、[現在の値、dispatch関数]
  // ここでは、useReducer()の結果、現在の値がcountに、dispatc関数(reducer)がdispatchにそれぞれ代入される
  // 下でdispath('RESET)などとやってるのは、実際は、reducer('RESET')としているのと同じ

  // useReducerのメリット
  // 状態の更新を呼び出す方(ここでいうbuttonのonClick)は、具体的な状態に依存していないので、コードをシンプルに保てる
  // 状態を更新するロジック(ここでいうreducerメソッド)をコンポーネントギアの関数に切り出してるため、テストが容易
const Counter2 = (props: CounterProps) => {
  const { initialValue } = props
  const [count, dispatch] = useReducer(reducer, initialValue)

  return (
    <div>
      <p>Count: {count}</p>
      {/* dispatch関数にactionを渡して、状態を更新 */}
      <button onClick={() => dispatch('DECREMENT')}>-</button>
      <button onClick={() => dispatch('INCREMENT')}>+</button>
      <button onClick={() => dispatch('DOUBLE')}>×2</button>
      <button onClick={() => dispatch('RESET')}>Reset</button>
    </div>
  )
}

export default Counter2
