// pages/Home.tsx

import React, { useState, useEffect } from "react";
import { Top, Introduction, Activities, Skill, Finally } from "../components/sections";
import BackgroundController from "../components/back/BackgroundController";
import Loading from "../components/layout/Loading"; // Loading コンポーネントをインポーネート
import Header from "../components/layout/Header"; // フッターコンポーネントをインポート
import Footer from "../components/layout/Footer"; // フッターコンポーネントをインポート

// Homeコンポーネントは、Homeページを表示します。
const Home = () => {
  const [isLoading, setIsLoading] = useState(true); // ロード画面の表示状態
  const [fadeOut, setFadeOut] = useState(false); // フェードアウトの状態

  useEffect(() => {
    // 5秒後にフェードアウトを開始
    const timer = setTimeout(() => {
      setFadeOut(true); // フェードアウトを開始
      // フェードアウトが完了したらロード画面を非表示に
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); // フェードアウトに1秒かける
    }, 6000); // 6秒間ロード画面を表示

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  return (
    <div style={{ position: "relative" }}>
      {isLoading && <Loading fadeOut={fadeOut} />} {/* Loading コンポーネントを使用 */}
      <BackgroundController />
      <Top />
      <Header /> {/* ヘッダーを最初に配置 */}
      <Introduction />
      <Activities />
      <Skill />
      <Finally />
      <Footer /> {/* フッターを最後に配置 */}
    </div>
  );
};

export default Home;
