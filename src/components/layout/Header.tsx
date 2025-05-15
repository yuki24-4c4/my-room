// components/layout/Header.tsx

import React, { useEffect, useState } from "react";

// Headerコンポーネントは、ページのヘッダー部分を表示します。
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const topSection = document.getElementById("top");
      const footerSection = document.getElementById("footer");
      if (topSection && footerSection) {
        const topSectionBottom = topSection.getBoundingClientRect().bottom;
        const footerSectionTop = footerSection.getBoundingClientRect().top;
        setIsVisible(topSectionBottom <= 0 || footerSectionTop <= window.innerHeight); // Topが画面外、またはFooterが画面内に入ったら表示
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 50, // ヘッダー分の余白を確保
        behavior: "smooth",
      });
    }
  };

  if (!isVisible) return null; // 非表示の場合は何もレンダリングしない

  return (
    <header className="header">
      <nav className="header-nav">
        <a href="#top" onClick={(e) => handleSmoothScroll(e, "top")}>トップ</a>
        <span>|</span>
        <a href="#introduction" onClick={(e) => handleSmoothScroll(e, "introduction")}>自己紹介</a>
        <span>|</span>
        <a href="#activities" onClick={(e) => handleSmoothScroll(e, "activities")}>活動紹介</a>
        <span>|</span>
        <a href="#skill" onClick={(e) => handleSmoothScroll(e, "skill")}>スキル・資格</a>
        <span>|</span>
        <a href="#finally" onClick={(e) => handleSmoothScroll(e, "finally")}>最後に</a>
      </nav>
    </header>
  );
};

export default Header;
