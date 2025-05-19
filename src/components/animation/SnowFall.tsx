import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import snow from "../../assets/snow.svg"; // 雪の結晶のSVG画像をインポート

interface Snowflake {
  id: number;
  left: number;
  size: number;
  rotation: number;
  xOffset: number; // 左右の動きのオフセット
}

const createSnowflake = (id: number): Snowflake => ({
  id,
  left: Math.random() * 100, // 横方向の位置をランダムに (0〜100%)
  size: 20 + Math.random() * 15, // サイズをランダムに (20px〜35px)
  rotation: Math.random() * 360, // 初期の回転角度をランダムに
  xOffset: Math.random() * 10, // 左右に動かすためのランダムなオフセット
});

const Snowfall: React.FC = () => {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);
  const maxSnowflakes = 40; // 最大雪の結晶数

  useEffect(() => {
    let animationFrameId: number;
    const intervalId = setInterval(() => {
      setSnowflakes((prev) => {
        if (prev.length < maxSnowflakes) {
          return [...prev, createSnowflake(Date.now())];
        }
        return prev;
      });
    }, 200);

    const updateSnowflakes = () => {
      setSnowflakes((prev) =>
        prev.filter((flake) => flake.left >= -10 && flake.left <= 110)
      );
      animationFrameId = requestAnimationFrame(updateSnowflakes);
    };

    animationFrameId = requestAnimationFrame(updateSnowflakes);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="snowfall-container">
      {snowflakes.map((flake) => (
        <motion.div
          key={flake.id}
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: "100vh", // 画面の下まで落下
            opacity: 1,
            x: [`-${flake.xOffset}vw`, `${flake.xOffset}vw`], // 左右に動かすアニメーション
            rotate: [flake.rotation, flake.rotation + 360], // 回転のアニメーション
          }}
          transition={{
            duration: 5 + Math.random() * 3, // 5〜8秒で落下
            ease: "linear",
            repeat: Infinity, // 左右の動きを繰り返す
            repeatType: "loop", // 繰り返し
          }}
          style={{
            position: "absolute",
            left: `${flake.left}vw`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            zIndex: 0,
          }}
        >
          <img
            src={snow}
            alt="Snowflake"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transform: `rotate(${flake.rotation}deg)`,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Snowfall;
