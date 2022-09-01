import { useState, useEffect, useLayoutEffect } from "react";

// タイマーが呼び出される周期を1秒にする
const UPDATE_CYCLE = 1000;

// localstorageで使用するキー
const KEY_LOCALE = "KEY_LOCALE";

enum Locale {
  US = "en-US",
  JP = "ja-JP",
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.US:
      return Locale.US;
    case Locale.JP:
      return Locale.JP;
    default:
      return Locale.US;
  }
};

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date());
  const [locale, setLocale] = useState(Locale.US);

  // タイマーのセットをするための副作用
  useEffect(() => {
    // タイマーのセット
    const timer = setInterval(() => {
      setTimestamp(new Date());
    }, UPDATE_CYCLE);

    // クリーンアップ関数を渡し、アンマウント時にタイマーの解除をする
    return () => {
      clearInterval(timer);
    };
    // 初期描画時のみ実行する
  }, []);

  // useEffectからuseLayoutEffectに変更
  // useEffect => 画面に描画された "後" に関数を実行
  // useLayoutEffect => 画面に描画された "前" に関数を実行(但し、同期的に処理が実行されるので、関数の中身が重くなるとページ表示が遅くなるので注意)
  useLayoutEffect(() => {
    // useEffectでは、リロード時は、下のuseEffectが先に呼ばれて(useStateの段階で呼ばれるから)、ローカルストレージに既にLocale.USが入っている => Local.JP選択時にリロードすると画面が一瞬チラつく
    // useLayoutEffectでは、画面描画より先にこの関数が実行されるため、チラつきがなくなる
    const savedLocale = localStorage.getItem(KEY_LOCALE);
    console.log("savedLocale");
    console.log(savedLocale);
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale));
    }
  }, []);

  // localeが変化した時に、localstorageに値を保存するための副作用
  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale);
    // 依存配列にlocaleを渡し、localeが変化する度に実行するようにする
  }, [locale]);

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}
        >
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  );
};
