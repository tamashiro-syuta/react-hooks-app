import React, { useContext } from "react";

type User = {
  id: number;
  name: string;
};

// ユーザーデータ(or null)を保持するContextを作成する
// Contextは、propsのバケツリレー地獄を回避するために存在(コンポーネント全体で共有する状態のイメージ)
// 構文 React.createContext<型>(初期値);
const UserContext = React.createContext<User | null>(null);

const GrandChild = () => {
  // 上で定義した型User用のuseContextにContextを渡すことで、Contextから値を取得する
  // 構文 useContext(Context<unknown>) ※UsercontextはContext<User | null>
  const user = useContext(UserContext);

  // Parentから(Childから要素を受け取らずに)要素が渡されてる
  return user !== null ? <p>Hello, {user.name}</p> : null;
};

const Child = () => {
  const now = new Date();

  return (
    <div>
      <p>Current: {now.toLocaleString()}</p>
      <GrandChild />
    </div>
  );
};

export const Parent = () => {
  const user: User = {
    id: 1,
    name: "Alice",
  };
  return (
    // Contextに値を渡す
    <UserContext.Provider value={user}>
      <Child />
    </UserContext.Provider>
  );
};
