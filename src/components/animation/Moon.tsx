import React, { useEffect, useState } from 'react';

// SVG画像をインポート
import FullMoon from '../../assets/full-moon.svg';
import HalfMoon from '../../assets/half-moon.svg';
import CrescentMoon from '../../assets/crescent-moon.svg';

const Moon: React.FC = () => {
  // 現在の月の画像を管理
  const [currentMoon, setCurrentMoon] = useState(FullMoon);

  // 月の現在位置 (x, y)
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 最初の一周が完了したかどうか

  useEffect(() => {
    let animationFrameId: number; // アニメーションフレームID
    let startTime: number | null = null; // アニメーション開始時刻
    const orbitDuration = 12000; // 半円を1周する時間 (15秒)
    const moonPhases = [CrescentMoon,FullMoon, HalfMoon]; // 月の画像リスト
    let currentPhaseIndex = 0; // 現在の月のフェーズインデックス

    const animate = () => {
      const currentTime = Date.now(); // 現在時刻

      if (startTime === null) {
        startTime = currentTime; // 最初のフレームで開始時刻を設定
      }

      const elapsedTime = currentTime - startTime; // 経過時間

      // 一周が完了したら月の画像を切り替える
      if (elapsedTime >= orbitDuration) {
        currentPhaseIndex = (currentPhaseIndex + 1) % moonPhases.length; // 次のフェーズに移動
        setCurrentMoon(moonPhases[currentPhaseIndex]); // 月の画像を更新
        startTime = currentTime; // 時間をリセット
        
      }

      // 軌道上の位置を計算
      const orbitProgress = (elapsedTime % orbitDuration) / orbitDuration; // 軌道の進行度
      const angle = orbitProgress * Math.PI; // 軌道上の角度 (0からπまで)

      // ウィンドウサイズを取得
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // 軌道の幅と高さを設定
      const orbitWidth = windowWidth * 0.9; // 軌道の横幅
      const orbitHeight = windowHeight * 1.8; // 軌道の縦幅

      // 軌道の中心座標
      const centerX = windowWidth / 2;
      const centerY = windowHeight / 1; // 地面の位置を考慮

      // 軌道上の現在位置を計算 (半円)
      const x = centerX + Math.cos(angle) * (orbitWidth / 2);
      const y = centerY - Math.sin(angle) * (orbitHeight / 2); // 上方向に移動するため符号を反転

      setPosition({ x, y }); // 現在位置を更新

      // 次のフレームをリクエスト
      animationFrameId = requestAnimationFrame(animate);
    };

    // アニメーションを開始
    animationFrameId = requestAnimationFrame(animate);

    // コンポーネントがアンマウントされたときにアニメーションを停止
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // 月を描画
  return (
      <div
        className="moon-container"
        style={{
          left: `${position.x}px`, // 現在のx座標
          top: `${position.y}px`, // 現在のy座標
        }}
      >
        <img src={currentMoon} alt="Moon Phase" className="moon-image" />
      </div>
  );
};

export default Moon;
