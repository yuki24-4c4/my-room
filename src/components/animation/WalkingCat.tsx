import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Cat } from 'lucide-react';

// WalkingCat コンポーネントのプロパティ型定義
interface WalkingCatProps {
  onWalkComplete: () => void; // 歩行アニメーションが完了したときに呼び出されるコールバック関数
  catSvg?: string; // カスタムの猫のSVG画像（オプション）
}

// WalkingCat コンポーネント
const WalkingCat: React.FC<WalkingCatProps> = ({ onWalkComplete, catSvg }) => {
  const [position, setPosition] = useState(-100); // 猫の現在の横方向の位置
  const walkDuration = 8; // アニメーションの継続時間（秒）
  const finalPosition = window.innerWidth * 0.4; // 猫が停止する位置（画面幅の40%）

  useEffect(() => {
    let startTime: number | null = null; // アニメーション開始時刻
    let animationFrameId: number; // requestAnimationFrame の ID

    // アニメーション関数
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp; // 初回呼び出し時に開始時刻を設定
      const elapsed = timestamp - startTime; // 経過時間を計算
      const progress = Math.min(elapsed / (walkDuration * 1000), 1); // 進行度（0～1）

      // イージング関数（easeInOut）
      const easeInOutProgress = progress < 0.5
        ? 2 * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      // 新しい位置を計算
      const newPosition = -100 + easeInOutProgress * (finalPosition + 100);
      setPosition(newPosition); // 状態を更新

      if (progress < 1) {
        // アニメーションを継続
        animationFrameId = requestAnimationFrame(animate);
      } else {
        // アニメーションが完了したらコールバックを呼び出す
        onWalkComplete();
      }
    };

    // アニメーションを開始
    animationFrameId = requestAnimationFrame(animate);

    // クリーンアップ関数（コンポーネントがアンマウントされたときにアニメーションを停止）
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onWalkComplete, finalPosition, walkDuration]);

  // 猫の上下動を計算（歩行中の自然な動き）
  const calculateYOffset = () => {
    const cycle = (position + 100) / 20; // サイクルを計算
    return Math.sin(cycle) * 5; // サイン波で上下動を計算
  };

  return (
    <div 
      className="absolute bottom-[20%] z-10" // 猫の位置を絶対配置
      style={{ 
        left: `${position}px`, // 横方向の位置
        transform: `translateY(${calculateYOffset()}px)` // 上下動を適用
      }}
    >
      <motion.div
        animate={{
          y: [0, -5, 0, -5, 0], // モーションの上下動
        }}
        transition={{
          duration: 2, // モーションの継続時間
          repeat: Infinity, // 無限ループ
          ease: "easeInOut" // イージング
        }}
      >
        {catSvg ? (
          // カスタムSVGが指定されている場合はそれを表示
          <img 
            src={catSvg} 
            alt="Walking Cat" 
            className="w-20 h-20" // サイズを指定
          />
        ) : (
          // デフォルトの猫アイコンを表示
          <Cat 
            size={80} 
            className="text-black fill-[#f5e6c9]" // 色を指定
          />
        )}
      </motion.div>
    </div>
  );
};

export default WalkingCat;
