import { useState, useEffect } from 'react';
import TopScene from '../animation/TopScene';

function Top() {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    // スクロールを無効化
    if (!animationComplete) {
      document.documentElement.style.overflow = 'hidden'; // html 要素のスクロールを無効化
      document.documentElement.style.height = '100%';
      document.body.style.overflow = 'hidden'; // body 要素のスクロールを無効化
      document.body.style.height = '100%';
    } else {
      document.documentElement.style.overflow = 'auto'; // スクロールを有効化
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    }
    // クリーンアップ関数で元に戻す
    return () => {
      document.documentElement.style.overflow = 'auto';
      document.documentElement.style.height = 'auto';
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
    };
  }, [animationComplete]);

  return (
    <section id="top">
      <div className="relative">
        <TopScene 
          onAnimationComplete={() => setAnimationComplete(true)} // アニメーション完了時にスクロールを有効化
        />
      </div>
      <div id="ground"></div>
    </section>
  );
}

export default Top;
