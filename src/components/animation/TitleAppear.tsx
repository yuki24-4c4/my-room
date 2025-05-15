import React, { useEffect, useState } from 'react';
import arrow from "../../assets/arrow.svg"; // 矢印の画像をインポート

interface TitleAppearProps {
  onAnimationComplete: () => void;
}

const TitleAppear: React.FC<TitleAppearProps> = ({ onAnimationComplete }) => {
  const title = "yukiのへや";
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // アニメーションが完了したらコールバックを呼び出す
    const timer = setTimeout(() => {
      setIsAnimating(false);
      onAnimationComplete();
    }, title.length * 400 + 1000); // 各文字のアニメーション時間 + 余裕時間

    return () => clearTimeout(timer);
  }, [onAnimationComplete, title.length]);

  return (
    <div className={`title-appear-container ${isAnimating ? 'visible' : ''}`}>
      <div className="title-appear-background">
        <div className="title-appear-text">
          {title.split('').map((char, index) => (
            <h1
              key={index}
              className="title-appear-char"
              style={{ animationDelay: `${index * 0.4}s` }} // 左から順番にアニメーション
            >
              {char}
            </h1>
          ))}
        </div>
        {/* 矢印のスペースを常に確保しつつ、アニメーション完了後に表示 */}
        <div className={`scroll-indicator ${!isAnimating ? 'visible' : ''}`}>
          <img className="arrow" src={arrow} alt="arrow"></img>
        </div>
      </div>
    </div>
  );
};

export default TitleAppear;
