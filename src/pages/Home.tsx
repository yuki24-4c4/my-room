// pages/Home.tsx

import { Top, Introduction, Activities, Skill, Finally } from "../components/sections";
import BackgroundController from "../components/back/BackgroundController";
import Header from "../components/layout/Header"; // フッターコンポーネントをインポート
import Footer from "../components/layout/Footer"; // フッターコンポーネントをインポート

// Homeコンポーネントは、Homeページを表示します。
const Home = () => {
  return (
    <div style={{ position: "relative" }}>
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
