import React, { useState, useRef } from "react";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const UPLOAD_DELAY = 1000;

// ------------------------------------------------------------------------------
// useRef => 書き換え可能なrefオブジェクトを作成
// refの使い方 => ①データの保持 ②DOMの参照
// refオブジェクトに保存された値は更新しても再描画されない => 描画に関係ないデータの保持に利用
// ------------------------------------------------------------------------------

export const ImageUploader = () => {
  // 隠されたinput要素の参照を保持するためのref (入る要素はinputタグかnullに固定。初期値はnull)
  const inputImageRef = useRef<HTMLInputElement | null>(null);
  // 選択されたファイルデータを保持するref
  const fileRef = useRef<File | null>(null);
  const [message, setMessage] = useState<string | null>("");

  // 「画像をアップロード」というテキストがクリックされた時のコールバック
  const onClickText = () => {
    if (inputImageRef.current !== null) {
      // inputのDOMにアクセスして、クリックイベントを発火する
      // inputImageRef.currentには、input要素が入っている (inputImageRefは下のinputのrefに指定しているから)
      inputImageRef.current.click();
    }
  };
  // ファイルが選択された後に呼ばれるコールバック
  // 引数eには、呼び出し時に指定しなくても event(ここではonChange)が入る(https://ja.reactjs.org/docs/handling-events.html)
  const onChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files !== null && files.length > 0) {
      // fileRef.currentに値を保存する。
      // fileRef.currentが変化しても再描画は発生しない(useRefを使っているから)
      fileRef.current = files[0];
    }
  };
  // アップロードボタンがクリックされた時に呼ばれるコールバック
  const onClickUpload = async () => {
    if (fileRef.current !== null) {
      // 通常はここでAPIを呼んで、ファイルをサーバーにアップロードする
      // ここでは擬似的に一定時間(1秒)待つ
      await sleep(UPLOAD_DELAY);
      // アップロードが成功した旨を表示するために、メッセージを書き換える
      setMessage(`${fileRef.current.name} のアップロードに成功しました`);
    }
  };

  return (
    <div>
      {/* p要素がクリックされたら、inputImageRef.current.click()を呼び出すことで、inputをクリックするイベントをDOMへ発行して、ダイアログを呼び出す */}
      <p style={{ textDecoration: "underline" }} onClick={onClickText}>
        画像をアップロード
      </p>
      <input
        // inputとコンポーネントを紐付け
        ref={inputImageRef}
        // 受け取る媒体をfileに限定(dateなどにすると、カレンダーなどから選べるようになる)
        type="file"
        // 受け取るファイルの種類を決める属性
        accept="image/*"
        // 上のp要素をクリックしファイルが選択されると、input要素のonChangeイベント(以下のonChangeImageメソッド)が呼ばれる
        onChange={onChangeImage}
        // 上のp要素でクリックした時の挙動は設定しているので、この要素は見えないようにする
        style={{ visibility: "hidden" }}
      />
      <br />
      <button onClick={onClickUpload}>アップロードする</button>
      {message !== null && <p>{message}</p>}
    </div>
  );
};
