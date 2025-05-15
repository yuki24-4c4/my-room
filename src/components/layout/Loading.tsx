import React from "react";

interface LoadingProps {
  fadeOut: boolean; // フェードアウト状態を受け取る
}

const Loading: React.FC<LoadingProps> = ({ fadeOut }) => {
  return (
    <div
      id="loading"
      className={fadeOut ? "fade-out" : ""} // フェードアウト時にクラスを追加
    >
      <p className="loading-text">Loading...</p>
    </div>
  );
};

export default Loading;
