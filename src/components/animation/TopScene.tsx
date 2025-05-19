import React, { useState, useEffect } from 'react';
import Moon from './Moon';
import TitleAppear from './TitleAppear';
import SnowFall from './SnowFall';

interface TopSceneProps {
  onAnimationComplete: () => void;
}

const TopScene: React.FC<TopSceneProps> = ({ onAnimationComplete }) => {
  const [titleVisible, setTitleVisible] = useState(false);

  useEffect(() => {
    // 読み込みから指定秒数後に TitleAppear を表示
    const timer = setTimeout(() => {
      setTitleVisible(true);
    }, 2000); // 3秒後に表示

    return () => clearTimeout(timer); // クリーンアップ
  }, []);

  const handleTitleAnimationComplete = () => {
    onAnimationComplete(); // TitleAppear のアニメーション完了時に通知
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-b from-[#2a1b3d] to-[#503e75]">
      <SnowFall />
      <Moon />
      {/* <SceneryGenerator /> */}
      {/* <WalkingCat onWalkComplete={() => {}} /> WalkingCat はそのまま表示 */}
      {titleVisible && (
        <TitleAppear onAnimationComplete={handleTitleAnimationComplete} />
      )}
    </div>
  );
};

export default TopScene;
